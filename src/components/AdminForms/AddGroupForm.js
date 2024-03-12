import { useEffect, useState } from "react";
import "./AdminForm.css";
import * as ApiProduct from "../ProductApi/ProductApi";
import Preloader from "../Preloader/Preloader";

function AddGroupForm() {
  const [isValidForm, setIsValidForm] = useState(false);
  const [formValue, setFormValue] = useState({
    title: "",
    preview: "",
    route: "",
    description: "",
    order: "",
    videoReview: "",
  });
  const [isPreloader, setIsPreloader] = useState(false);
  const [isValidInputText, setIsValidInputText] = useState(false);
  const [isValidInputLink, setIsValidInputLink] = useState(false);
  const [isValidInputRoute, setIsValidInputRoute] = useState(false);
  const [isValidInputOrder, setIsValidInputOrder] = useState(false);
  const [isValidInputVideo, setIsValidInputVideo] = useState(false);
  const [isErrorTextForInput, setIsErrorTextForInput] = useState("");
  const [isErrorTextForLink, setIsErrorTextForLink] = useState("");
  const [isErrorTextForRoute, setIsErrorTextForRoute] = useState("");
  const [isErrorTextForOrder, setIsErrorTextForOrder] = useState("");
  const [isErrorTextForVideo, setIsErrorTextForVideo] = useState("");

  function sendGroup({ formValue }) {
    const { title, preview, route, description, order, videoReview } =
      formValue;

    ApiProduct.sendGroup({
      title,
      preview,
      route,
      description,
      order,
      videoReview,
    })
      .then((res) => {
        setIsPreloader(false);
        alert(
          "Группа товаров добавлена успешно. Обновления появятся после перезагрузки страницы."
        );
        return res;
      })
      .catch((err) => {
        setIsPreloader(false);
        alert(
          "Произошла ошибка. Группа не добавлена, пожалуйста, проверьте правильность заполнения формы."
        );
      });
  }

  function handleSubmitAddGroupForm(e) {
    e.preventDefault();

    if (!isValidForm) {
      return;
    } else {
      setIsPreloader(true);
      sendGroup({ formValue });
      setFormValue({
        title: "",
        preview: "",
        route: "",
        description: "",
        order: "",
        videoReview: "",
      });
      e.target.reset();
    }
  }

  function handleChangeInputs(e) {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  }

  function handleChangeInputText(e) {
    const validationMessage = "Данное поле должно содержать минимум 2 символа.";
    if (/^[а-яА-ЯёЁA-Za-z\-\s\D]+$/.test(e.target.value)) {
      setIsValidInputText(true);
      setIsErrorTextForInput(e.target.validationMessage);
      handleChangeInputs(e);
      return;
    }
    setIsErrorTextForInput(validationMessage);
    setIsValidInputText(false);
  }

  function handleChangeInputRoute(e) {
    const validationMessage = "Данное поле должно быть формата /trimmers.";
    if (/^\/[A-Za-z\-\s]+$/.test(e.target.value)) {
      setIsValidInputRoute(true);
      setIsErrorTextForRoute(e.target.validationMessage);
      handleChangeInputs(e);
      return;
    }
    setIsErrorTextForRoute(validationMessage);
    setIsValidInputRoute(false);
  }

  function handleChangeInputOrder(e) {
    const validationMessage = "Укажите порядковый номер.";
    if (/\d+/.test(e.target.value)) {
      setIsValidInputOrder(true);
      setIsErrorTextForOrder(e.target.validationMessage);
      handleChangeInputs(e);
      return;
    }
    setIsErrorTextForOrder(validationMessage);
    setIsValidInputOrder(false);
  }

  function handleChangeInputLink(e) {
    const validationMessage = "Некорректный URL";
    if (/https*:\/\/[w{3}.]?[\S]+#?\.[\S]+/i.test(e.target.value)) {
      setIsValidInputLink(true);
      setIsErrorTextForLink(e.target.validationMessage);
      handleChangeInputs(e);
      return;
    }
    setIsErrorTextForLink(validationMessage);
    setIsValidInputText(false);
  }

  function handleChangeInputVideo(e) {
    const validationMessage = "Некорректный URL";
    if (/https*:\/\/[w{3}.]?[\S]+#?\.[\S]+/i.test(e.target.value)) {
      setIsValidInputVideo(true);
      setIsErrorTextForVideo(e.target.validationMessage);
      handleChangeInputs(e);
      return;
    }
    setIsErrorTextForVideo(validationMessage);
    setIsValidInputText(false);
  }

  useEffect(() => {
    function checkAllInputsForGroup() {
      isValidInputText &&
      isValidInputLink &&
      isValidInputRoute &&
      isValidInputOrder
        ? setIsValidForm(true)
        : setIsValidForm(false);
    }
    checkAllInputsForGroup();
  }, [
    isValidInputText,
    isValidInputLink,
    isValidInputRoute,
    isValidInputOrder,
  ]);

  return (
    <form
      className="form form-group"
      id="addGroupForm"
      noValidate
      onSubmit={handleSubmitAddGroupForm}
    >
      {isPreloader ? <Preloader /> : ""}

      <p className="form__text">
        Требования для картинки в превью каталога: <br />- разрешение: 478 × 824
        px;
      </p>
      <label className="form__label">
        <label htmlFor="title" className="form__label">
          Название новой группы товаров *
        </label>
        <span className="form__error">{isErrorTextForInput}</span>
        <input
          type="text"
          id="title"
          name="title"
          className="form__input"
          required
          minLength="2"
          onChange={(e) => handleChangeInputText(e)}
          placeholder="Напр., Триммеры"
        />
      </label>
      <label htmlFor="preview" className="form__label">
        Ссылка на превью * (картинка, которая будет в каталоге).
      </label>
      <span className="form__error">{isErrorTextForLink}</span>
      <input
        type="url"
        id="preview"
        name="preview"
        className="form__input"
        required
        minLength="2"
        placeholder="URL"
        onChange={(e) => handleChangeInputLink(e)}
      />
      <label htmlFor="route" className="form__label">
        Нужно написать путь (то, что идет после домена через слеш в адресной
        строке, т.е. этот путь будет вести на страницу товаров), по которому
        новая группа товаров будет доступна. Этот путь должен быть уникальным
        для всего сайта, и лучше всего использовать просто перевод названия
        группы на английский. Писать строго строчными буквами, если в переводе
        несколько слов - первое слово с маленькой буквы, а последующие с
        заглавной без пробелов. Прошу заполнить путь с "/"*
      </label>
      <span className="form__error">{isErrorTextForRoute}</span>
      <input
        type="text"
        id="route"
        name="route"
        className="form__input"
        required
        minLength="2"
        placeholder="Например, /trimmers или /drillsAndScrewdrivers"
        onChange={(e) => handleChangeInputRoute(e)}
      />
      <label htmlFor="order" className="form__label">
        Порядок расположения в каталоге *
      </label>
      <span className="form__error">{isErrorTextForOrder}</span>
      <input
        type="number"
        id="order"
        name="order"
        className="form__input"
        required
        placeholder="Например, 1"
        onChange={(e) => handleChangeInputOrder(e)}
      />
      <label htmlFor="description" className="form__label">
        Описание новой группы товаров
      </label>
      <textarea
        type="text"
        id="description"
        name="description"
        className="form__input form__input_type_textarea"
        rows="4"
        minLength="2"
        placeholder="Текст, который будет под заголовком на странице с товарами данной категории. Заполнять необязательно."
        onChange={(e) => handleChangeInputs(e)}
      ></textarea>
      <label htmlFor="videoReview" className="form__label">
        Ссылка на видеообзор.
      </label>
      <span className="form__error">{isErrorTextForVideo}</span>
      <input
        type="url"
        id="videoReview"
        name="videoReview"
        className="form__input"
        placeholder="URL"
        onChange={(e) => handleChangeInputVideo(e)}
      />

      <button
        type="submit"
        className={`form__btn button ${
          isValidForm ? "" : "form__btn_type_disabled"
        }`}
      >
        Создать
      </button>
    </form>
  );
}

export default AddGroupForm;
