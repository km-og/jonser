import "./AdminForm.css";

function AdminForm({ title, groupForm, subgroupForm, modelForm }) {
  return (
    <form className="form form-group">
      <h3 className="form__title">{title}</h3>
      <p className="form__text">Поля, где стоит *, обязательны к заполнению.</p>
      <p className="form__text">
        Картинки должны быть размещены в открытом доступе, без фона, в формате
        webp, и весить не более 500КБ. Примерное разрешение картинок 800*800
        пикселей.
      </p>
      {groupForm ? (
        <>
          <label htmlFor="title" className="form__label">
            Название новой группы товаров *
          </label>
          <input
            type="text"
            id="title"
            name="title"
            className="form__input"
            required
            minLength="2"
            placeholder="Напр., Сварочные полуавтоматы"
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
          <select id="title" name="title" className="form__input">
            <option></option>
          </select>
          <label htmlFor="subtitle" className="form__label">
            Название новой подгруппы товаров
          </label>
          <input
            type="text"
            id="subtitle"
            name="subtitle"
            className="form__input"
            required
            minLength="2"
            placeholder=""
          />
          <fieldset className="form__fieldset">
            <h4 className="form__subtitle">Это премиум линейка?</h4>
            <label
              className="form__label form__label_type_wrap"
              htmlFor="premium-yes"
            >
              <input
                type="radio"
                id="premium-yes"
                name="premium"
                className="form__input form__input_type_radio"
                value="yes"
              />
              <label htmlFor="premium" className="form__label">
                Да
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
          <label htmlFor="title" className="form__label">
            Группа товаров
          </label>
          <select id="title" name="title" className="form__input">
            <option></option>
          </select>

          <label htmlFor="subtitle" className="form__label">
            Подгруппа товаров
          </label>
          <select id="subtitle" name="subtitle" className="form__input">
            <option></option>
          </select>

          <label htmlFor="nameModel" className="form__label">
            Номер модели (то, что идет после слова Jonser) *
          </label>
          <input
            type="text"
            id="nameModel"
            name="nameModel"
            className="form__input"
            required
            minLength="2"
            placeholder="Напр., 180DQX"
          />

          <label htmlFor="nameProduct" className="form__label">
            Название товара в единственном числе *
          </label>
          <input
            type="text"
            id="nameProduct"
            name="nameProduct"
            className="form__input"
            required
            minLength="2"
            placeholder="Напр., Сварочный полуавтомат"
          />

          <label htmlFor="fullNameModel" className="form__label">
            Полное наименование товара *
          </label>
          <input
            type="text"
            id="fullNameModel"
            name="fullNameModel"
            className="form__input"
            required
            minLength="2"
            placeholder="Сварочный полуавтомат Jonser 180DQX"
          />

          <label htmlFor="movieLink" className="form__label">
            Ссылка на Youtube
          </label>
          <input
            type="url"
            id="movieLink"
            name="movieLink"
            className="form__input"
            minLength="2"
            placeholder="URL"
          />

          <label htmlFor="preview" className="form__label">
            Ссылка на превью * (картинка, которая будет на карточке товара).{" "}
          </label>
          <input
            type="url"
            id="preview"
            name="preview"
            className="form__input"
            required
            minLength="2"
            placeholder="URL"
          />

          <fieldset className="form__fieldset">
            <h4 className="form__subtitle">Параметры на карточке товара</h4>
            <label htmlFor="paramOne" className="form__label">
              Параметр 1 с двоеточием в конце *
            </label>
            <input
              type="text"
              id="paramOne"
              name="paramOne"
              className="form__input"
              required
              minLength="2"
              placeholder="Ампераж:"
            />
            <label htmlFor="valueOne" className="form__label">
              Значение для параметра 1 *
            </label>
            <input
              type="text"
              id="valueOne"
              name="valueOne"
              className="form__input"
              required
              minLength="2"
              placeholder="180А"
            />
            <label htmlFor="paramTwo" className="form__label">
              Параметр 2 с двоеточием в конце *
            </label>
            <input
              type="text"
              id="paramTwo"
              name="paramTwo"
              className="form__input"
              required
              minLength="2"
              placeholder="Вместимость катушки:"
            />
            <label htmlFor="valueTwo" className="form__label">
              Значение для параметра 2 *
            </label>
            <input
              type="text"
              id="valueTwo"
              name="valueTwo"
              className="form__input"
              required
              minLength="2"
              placeholder="до 1 кг"
            />
          </fieldset>

          <fieldset className="form__fieldset">
            <h4 className="form__subtitle">
              Ссылки на картинки для модального окна. Можно добавить от 1 до 5
              фото.
            </h4>
            <label htmlFor="firstImg" className="form__label">
              Фото 1 *
            </label>
            <input
              type="url"
              id="firstImg"
              name="firstImg"
              className="form__input"
              required
              minLength="2"
              placeholder="URL"
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
            />
          </fieldset>

          <fieldset className="form__fieldset">
            <h4 className="form__subtitle">Характеристики</h4>
            <div className="form__wrap"></div>
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
