import { useState } from "react";
import "./AddForm.css";

function AdminForm({ title, groupForm, subgroupForm, modelForm }) {
  const [isValidForm, setIsValidForm] = useState(false);
  const [formValue, setFormValue] = useState({});
  const [isPreloader, setIsPreloader] = useState(false);
  const [isValidInputText, setIsValidInputText] = useState(true);
  const [isErrorTextForInput, setIsErrorTextForInput] = useState("");

  function renderInputs(param, value, id, quantity) {
    const inputs = [];

    for (let i = 1; i <= quantity; i++) {
      if (id === "ad") {
        inputs.push(
          <label className="form__label" key={`input-${id}-${i}`}>
            <span className="form__error">{isErrorTextForInput}</span>
            <input
              type="text"
              id={`param-${id}-${i}`}
              name={`param-${id}-${i}`}
              className="form__input"
              minLength="2"
              placeholder={param}
              onChange={handleChangeInputParam}
            />
          </label>
        );
      } else {
        inputs.push(
          <div key={`input-${id}-${i}`} className="form__container">
            <label className="form__label">
              <span className="form__error">{isErrorTextForInput}</span>
              <input
                type="text"
                id={`param-${id}-${i}`}
                name={`param-${id}-${i}`}
                className="form__input"
                minLength="2"
                placeholder={param}
                onChange={handleChangeInputParam}
              />
            </label>
            <label className="form__label">
              <span className="form__error">{isErrorTextForInput}</span>
              <input
                type="text"
                id={`value-${id}-${i}`}
                name={`value-${id}-${i}`}
                className="form__input"
                required
                minLength="2"
                placeholder={value}
                onChange={handleChangeInputValue}
              />
            </label>
          </div>
        );
      }
    }
    return inputs;
  }

  function sendForm({ formValue }) {
    console.log(formValue);
  }

  function handleSubmitAddForm(e) {
    e.preventDefault();
    if (!isValidForm) {
      return;
    } else {
      setIsPreloader(true);
      sendForm({ formValue });
    }
  }

  function handleChangeInputs(e) {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
    console.log(formValue);
  }

  function handleChangeInputText(e) {
    console.log(e.target);
    console.log(e.target.value);
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

  function handlePremium(e) {
    console.log(e.target.value);
  }

  function handleChangeInputLink(e) {
    console.log(e.target.value);
  }

  function handleChangeInputParam(e) {
    console.log(e.target.value);
  }

  function handleChangeInputValue(e) {
    console.log(e.target.value);
  }

  function handleChangeInputPrice(e) {
    console.log(e.target.value);
  }

  function handleChangeInputSelect(e) {
    console.log(e.target.value);
  }

  return (
    <form
      className="form form-group"
      id="addForm"
      noValidate
      onSubmit={handleSubmitAddForm}
    >
      <h3 className="form__title">{title}</h3>
      <p className="form__text">
        Поля со звездочкой обязательны к заполнению. Также, необходимо соблюдать
        регистр при заполнении номера модели. Параметры и значения важно
        начинать писать с заглавной буквы и с двоеточием в конце.
      </p>

      {groupForm ? (
        <>
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
              placeholder="Напр., Сварочные полуавтоматы"
            />
          </label>
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
            placeholder="Текст, который будет под заголовком. Заполнять необязательно"
          ></textarea>
        </>
      ) : (
        ""
      )}
      {subgroupForm ? (
        <>
          <label htmlFor="title" className="form__label">
            Группа товаров
          </label>
          <select
            id="title"
            name="title"
            className="form__input"
            onChange={handleChangeInputSelect}
          >
            <option></option>
          </select>
          <label className="form__label">
            <label htmlFor="subtitle" className="form__label">
              Название новой подгруппы товаров *
            </label>
            <span className="form__error">{isErrorTextForInput}</span>
            <input
              type="text"
              id="subtitle"
              name="subtitle"
              className="form__input"
              required
              minLength="2"
              placeholder="Напр., Классическая серия без газа"
              onChange={(e) => handleChangeInputText(e)}
            />
          </label>
          <fieldset className="form__fieldset">
            <h4 className="form__subtitle">Это премиум линейка? *</h4>
            <label className="form__label">
              <label
                className="form__label form__label_type_wrap"
                htmlFor="premium-yes"
              >
                {/* <span className="feedback__input-error">{isErrorTextForInput}</span> */}
                <input
                  type="radio"
                  id="premium-yes"
                  name="premium"
                  onChange={handlePremium}
                  className="form__input form__input_type_radio"
                  value="yes"
                />
                <label htmlFor="premium" className="form__label">
                  Да
                </label>
              </label>
            </label>
            <label
              className="form__label form__label_type_wrap"
              htmlFor="premium-no"
            >
              <input
                type="radio"
                id="premium-no"
                name="premium"
                onChange={handlePremium}
                className="form__input form__input_type_radio"
                value="no"
              />
              <label htmlFor="premium" className="form__label">
                Нет
              </label>
            </label>
          </fieldset>
        </>
      ) : (
        ""
      )}
      {modelForm ? (
        <>
          <p className="form__text">
            Картинки должны быть размещены в открытом доступе, без фона, в
            формате webp и весить не более 500КБ. Нужно выложить картинку в
            облако, далее открыть картинку в новой вкладке и использовать
            полученную ссылку.
          </p>
          <p className="form__text">
            Требования для картинки в превью (на карточке товара): <br />
            - разрешение: 741*606 пикселей;
            <br />- должны быть поля вокруг изображения, чтобы масштаб и
            расположение совпадали с другими изображениями на сайте.
          </p>
          <p className="form__text">
            Требования для картинок в модальном окне:
            <br />
            - примерное разрешение: 800*800 пикселей;
            <br />- поля максимально обрезаны для каждого фото.
          </p>
          <label htmlFor="title" className="form__label">
            Группа товаров
          </label>
          <select
            id="title"
            name="title"
            className="form__input"
            onChange={handleChangeInputSelect}
          >
            <option></option>
          </select>

          <label htmlFor="subtitle" className="form__label">
            Подгруппа товаров
          </label>
          <select
            id="subtitle"
            name="subtitle"
            className="form__input"
            onChange={handleChangeInputSelect}
          >
            <option></option>
          </select>

          <label htmlFor="nameModel" className="form__label">
            Номер модели (то, что идет после слова Jonser) *
          </label>
          <span className="form__error">{isErrorTextForInput}</span>
          <input
            type="text"
            id="nameModel"
            name="nameModel"
            className="form__input"
            required
            minLength="2"
            placeholder="Напр., 180DQX"
            onChange={(e) => handleChangeInputText(e)}
          />

          <label htmlFor="nameProduct" className="form__label">
            Название товара в единственном числе *
          </label>
          <span className="form__error">{isErrorTextForInput}</span>
          <input
            type="text"
            id="nameProduct"
            name="nameProduct"
            className="form__input"
            required
            minLength="2"
            placeholder="Напр., Сварочный полуавтомат"
            onChange={(e) => handleChangeInputText(e)}
          />

          <label htmlFor="fullNameModel" className="form__label">
            Полное наименование товара *
          </label>
          <span className="form__error">{isErrorTextForInput}</span>
          <input
            type="text"
            id="fullNameModel"
            name="fullNameModel"
            className="form__input"
            required
            minLength="2"
            placeholder="Сварочный полуавтомат Jonser 180DQX"
            onChange={(e) => handleChangeInputText(e)}
          />

          <label htmlFor="movieLink" className="form__label">
            Ссылка на Youtube
          </label>
          <span className="form__error">{isErrorTextForInput}</span>
          <input
            type="url"
            id="movieLink"
            name="movieLink"
            className="form__input"
            minLength="2"
            placeholder="URL"
            onChange={handleChangeInputLink}
          />

          <label htmlFor="preview" className="form__label">
            Ссылка на превью * (картинка, которая будет на карточке товара).{" "}
          </label>
          <span className="form__error">{isErrorTextForInput}</span>
          <input
            type="url"
            id="preview"
            name="preview"
            className="form__input"
            required
            minLength="2"
            placeholder="URL"
            onChange={handleChangeInputLink}
          />

          <fieldset className="form__fieldset">
            <h4 className="form__subtitle">Параметры на карточке товара</h4>
            <p className="form__text">
              Параметры пишем с большой буквы с двоеточием в конце, значения
              также с большой буквы без точки в конце, и не забываем соблюдать
              регистр, где необходимо. Желательно заполнять два поля, но можно
              одно или три.
            </p>
            {renderInputs("Параметр:", "Значение", "title", 3)}
          </fieldset>

          <fieldset className="form__fieldset">
            <h4 className="form__subtitle">
              Ссылки на картинки для модального окна. Можно добавить от 1 до 5
              фото.
            </h4>
            <label htmlFor="firstImg" className="form__label">
              Фото 1 *
            </label>
            <span className="form__error">{isErrorTextForInput}</span>
            <input
              type="url"
              id="firstImg"
              name="firstImg"
              className="form__input"
              required
              minLength="2"
              placeholder="URL"
              onChange={handleChangeInputLink}
            />
            <label htmlFor="secondImg" className="form__label">
              Фото 2
            </label>
            <input
              type="url"
              id="secondImg"
              name="secondImg"
              className="form__input"
              minLength="2"
              placeholder="URL"
              onChange={handleChangeInputLink}
            />
            <label htmlFor="secondImg" className="form__label">
              Фото 3
            </label>
            <input
              type="url"
              id="secondImg"
              name="secondImg"
              className="form__input"
              minLength="2"
              placeholder="URL"
              onChange={handleChangeInputLink}
            />
            <label htmlFor="secondImg" className="form__label">
              Фото 4
            </label>
            <input
              type="url"
              id="secondImg"
              name="secondImg"
              className="form__input"
              minLength="2"
              placeholder="URL"
              onChange={handleChangeInputLink}
            />
            <label htmlFor="secondImg" className="form__label">
              Фото 5
            </label>
            <input
              type="url"
              id="secondImg"
              name="secondImg"
              className="form__input"
              minLength="2"
              placeholder="URL"
              onChange={handleChangeInputLink}
            />
          </fieldset>

          <fieldset className="form__fieldset">
            <h4 className="form__subtitle">Характеристики</h4>
            <p className="form__text">
              Характеристики пишем с большой буквы с двоеточием в конце,
              значения также с большой буквы без точки в конце, и не забываем
              соблюдать регистр, где необходимо.
            </p>
            <div className="form__wrap">
              {renderInputs("Характеристика:", "Значение", "spec", 15)}
            </div>
          </fieldset>

          <fieldset className="form__fieldset">
            <h4 className="form__subtitle">Комплектация</h4>

            <div className="form__wrap">
              {renderInputs("Наименование:", "Количество", "eq", 10)}
            </div>
          </fieldset>

          <fieldset className="form__fieldset">
            <h4 className="form__subtitle">Преимущества</h4>
            <p className="form__text">
              Пишем без нумерации, с большой буквы и без точки в конце.
            </p>
            <div className="form__wrap">
              {renderInputs("Преимущество:", "", "ad", 10)}
            </div>
          </fieldset>

          <fieldset className="form__fieldset">
            <label htmlFor="sale" className="form__label">
              Скидка *
            </label>
            <span className="form__error">{isErrorTextForInput}</span>
            <input
              type="text"
              id="sale"
              name="sale"
              className="form__input"
              required
              minLength="2"
              placeholder="Напр., -20%"
              onChange={handleChangeInputPrice}
            />
            <label htmlFor="newPrice" className="form__label">
              Новая цена *
            </label>
            <span className="form__error">{isErrorTextForInput}</span>
            <input
              type="text"
              id="newPrice"
              name="newPrice"
              className="form__input"
              required
              minLength="2"
              placeholder="Напр., 86 299 ₽"
              onChange={handleChangeInputPrice}
            />
            <label htmlFor="oldPrice" className="form__label">
              Старая цена *
            </label>
            <span className="form__error">{isErrorTextForInput}</span>
            <input
              type="text"
              id="oldPrice"
              name="oldPrice"
              className="form__input"
              required
              minLength="2"
              placeholder="Напр., 99 990 ₽"
              onChange={handleChangeInputPrice}
            />
          </fieldset>
        </>
      ) : (
        ""
      )}
      <button type="submit" className="form__btn button">
        Создать
      </button>
    </form>
  );
}

export default AdminForm;
