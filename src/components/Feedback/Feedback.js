import { sendData } from "../SendData/SendData";
import "./Feedback.css";
import Preloader from "../Preloader/Preloader";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import PopupRequest from "../PopupRequest/PopupRequest";

function Feedback() {
  const [isValidForm, setIsValidForm] = useState(false);
  const [isValidInputName, setIsValidInputName] = useState(false);
  const [isValidInputTel, setIsValidInputTel] = useState(false);
  const [isValidInputAgree, setIsValidInputAgree] = useState(false);
  const [isErrorTextForName, setIsErrorTextForName] = useState("");
  const [isErrorTextForTel, setIsErrorTextForTel] = useState("");
  const [isPreloader, setIsPreloader] = useState(false);
  const [isPopupRequest, setIsPopupRequest] = useState(false);
  const [isTitleFromPopupReq, setIsTitleFromPopupReq] = useState("");

  const [formValue, setFormValue] = useState({
    userName: "",
    userTel: "",
    category: "",
  });

  function handlePopupHide() {
    setIsPopupRequest(false);
  }

  function sendForm({ formValue }) {
    const { userName, userTel, category } = formValue;
    sendData(userName, userTel, category)
      .then((res) => {
        setIsPreloader(false);
        setIsTitleFromPopupReq(res.message);
        setIsPopupRequest(true);
        return res;
      })
      .catch((err) => {
        setIsTitleFromPopupReq(err.message);
        setIsPreloader(false);
        setIsPopupRequest(true);
      });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!isValidForm) {
      return;
    } else {
      setIsPreloader(true);
      sendForm({ formValue });
      setFormValue({ userName: "", userTel: "", category: "" });
    }
  }

  function handleChangeInputName(evt) {
    const validationMessage =
      "Имя должно содержать только латиницу, кириллицу, пробел или дефис.";
    if (/^[а-яА-ЯёЁA-Za-z\-\s\D]+$/.test(evt.target.value)) {
      setIsValidInputName(true);
      setIsErrorTextForName(evt.target.validationMessage);
      handleChangeInputs(evt);
      return;
    }
    setIsErrorTextForName(validationMessage);
    setIsValidInputName(false);
  }

  function handleChangeInputTel(evt) {
    const validationMessage = "Некорректный номер телефона";
    if (/\+*[\d-\(\)]{11,}/.test(evt.target.value)) {
      setIsValidInputTel(true);
      setIsErrorTextForTel(evt.target.validationMessage);
      handleChangeInputs(evt);
      return;
    }
    setIsErrorTextForTel(validationMessage);
    setIsValidInputTel(false);
  }

  function handleAgree(evt) {
    evt.target.checked
      ? setIsValidInputAgree(true)
      : setIsValidInputAgree(false);
  }

  function handleChangeSelect(evt) {
    evt.stopPropagation();
    handleChangeInputs(evt);
  }

  function handleChangeInputs(e) {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  }

  useEffect(() => {
    function checkAllInputs() {
      isValidInputName && isValidInputTel && isValidInputAgree
        ? setIsValidForm(true)
        : setIsValidForm(false);
    }
    checkAllInputs();
  }, [isValidInputName, isValidInputTel, isValidInputAgree]);

  return (
    <section className="feedback" id={"feedback"}>
      {isPopupRequest ? (
        <PopupRequest
          handleClick={handlePopupHide}
          title={isTitleFromPopupReq}
        />
      ) : (
        ""
      )}
      <div className="feedback__container">
        <div className="feedback__wrapper">
          {isPreloader ? <Preloader /> : ""}
          <h2 className="feedback__title">Заказ</h2>
          <p className="feedback__text">
            Заполните форму заказа, и мы перезвоним вам в ближайшее время.
          </p>
          <form
            className="feedback__form"
            id="feedback"
            noValidate
            onSubmit={handleSubmit}
          >
            <label className="feedback__label" htmlFor="userName">
              <input
                id="userName"
                type="text"
                className="feedback__input feedback__input_type_name"
                name="userName"
                required
                minLength="2"
                maxLength="200"
                placeholder="Ваше имя *"
                onChange={handleChangeInputName}
              />
              <span className="feedback__input-error">
                {isErrorTextForName}
              </span>
            </label>
            <label className="feedback__label" htmlFor="userTel">
              <input
                id="userTel"
                type="tel"
                className="feedback__input feedback__input_type_tel"
                name="userTel"
                required
                placeholder="Номер телефона *"
                onChange={handleChangeInputTel}
              />
              <span className="feedback__input-error">{isErrorTextForTel}</span>
            </label>
            <select
              id="category"
              name="category"
              className="feedback__input"
              onChange={handleChangeSelect}
            >
              <option className="feedback__option">Выберите категорию </option>
              <option className="feedback__option">
                Сварочные полуавтоматы
              </option>
              <option className="feedback__option">Бензопилы</option>
              <option className="feedback__option">Дрели–шуруповерты</option>
              <option className="feedback__option">
                Угловые шлифовальные машины (УШМ)
              </option>
              <option className="feedback__option">Триммеры</option>
              <option className="feedback__option">Электроинструменты</option>
              <option className="feedback__option">Компрессоры</option>
              <option className="feedback__option">
                Бензиновые генераторы
              </option>
              <option className="feedback__option">Наборы инструментов</option>
            </select>

            <div className="feedback__wrapper-bottom">
              <button
                type="submit"
                className={`feedback__btn button ${
                  isValidForm ? "" : "feedback__btn_type_disabled"
                }`}
              >
                отправить
              </button>
              <label
                htmlFor="agree"
                className="feedback__label feedback__label_type_bottom"
              >
                <input
                  type="checkbox"
                  name="agree"
                  id="agree"
                  onChange={handleAgree}
                  className="feedback__checkbox feedback__checkbox_type_agree cursor"
                />
                <span className="feedback__span feedback__span_type_agree">
                  Я соглашаюсь с{" "}
                  <NavLink to="/privacy" className="feedback__link link">
                    условиями
                  </NavLink>{" "}
                  обработки персональных данных
                </span>
              </label>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Feedback;
