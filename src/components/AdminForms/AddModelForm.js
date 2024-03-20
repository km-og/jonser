import { useContext, useState } from "react";
import "./AdminForm.css";
import Preloader from "../Preloader/Preloader";
import { GroupsContext } from "../../contexts/GroupsContexts";
import { useForm } from "react-hook-form";
import * as ApiModel from "../AdminApi/ModelApi";

function AddModelForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
  } = useForm();

  const [isPreloader, setIsPreloader] = useState(false);

  const catalogInfo = useContext(GroupsContext);

  //отрисовка полей
  function renderInputs(param, value, id, quantity) {
    const inputs = [];

    for (let i = 1; i <= quantity; i++) {
      if (id === "ad") {
        inputs.push(
          <label className="form__label" key={`input_${id}_${i}`}>
            <input
              type="text"
              id={`param_${id}_${i}`}
              name={`param_${id}_${i}`}
              className="form__input"
              placeholder={param}
              {...register(`param_${id}_${i}`, {
                minLength: { value: 1, message: "Минимальная длина 2 символа" },
              })}
              onBlur={() => trigger(`param_${id}_${i}`)}
            />
            {errors[`param_${id}_${i}`] && (
              <span className="form__error">
                {errors[`param_${id}_${i}`].message}
              </span>
            )}
          </label>
        );
      } else {
        inputs.push(
          <div key={`input_${id}_${i}`} className="form__container">
            <label className="form__label">
              <input
                type="text"
                id={`param_${id}_${i}`}
                name={`param_${id}_${i}`}
                className="form__input"
                placeholder={param}
                {...register(`param_${id}_${i}`, {
                  minLength: {
                    value: 1,
                    message: "Минимальная длина 2 символа",
                  },
                })}
                onBlur={() => trigger(`param_${id}_${i}`)}
              />
              {errors[`param_${id}_${i}`] && (
                <span className="form__error">
                  {errors[`param_${id}_${i}`].message}
                </span>
              )}
            </label>
            <label className="form__label">
              <input
                type="text"
                id={`value_${id}_${i}`}
                name={`value_${id}_${i}`}
                className="form__input"
                placeholder={value}
                {...register(`value_${id}_${i}`, {
                  minLength: {
                    value: 1,
                    message: "Минимальная длина 2 символа",
                  },
                })}
                onBlur={() => trigger(`value_${id}_${i}`)}
              />
              {errors[`value_${id}_${i}`] && (
                <span className="form__error">
                  {errors[`value_${id}_${i}`].message}
                </span>
              )}
            </label>
          </div>
        );
      }
    }
    return inputs;
  }

  function sendModel({ data, e }) {
    const {
      description,
      fifthImg,
      firstImg,
      fourthImg,
      movieLink,
      nameModel,
      nameProduct,
      newPrice,
      oldPrice,
      param_ad_1,
      param_ad_2,
      param_ad_3,
      param_ad_4,
      param_ad_5,
      param_ad_6,
      param_ad_7,
      param_ad_8,
      param_ad_9,
      param_ad_10,
      param_ad_11,
      param_eq_1,
      param_eq_2,
      param_eq_3,
      param_eq_4,
      param_eq_5,
      param_eq_6,
      param_eq_7,
      param_eq_8,
      param_eq_9,
      param_eq_10,
      param_eq_11,
      param_eq_12,
      param_eq_13,
      param_eq_14,
      param_eq_15,
      param_eq_16,
      param_eq_17,
      param_eq_18,
      param_spec_1,
      param_spec_2,
      param_spec_3,
      param_spec_4,
      param_spec_5,
      param_spec_6,
      param_spec_7,
      param_spec_8,
      param_spec_9,
      param_spec_10,
      param_spec_11,
      param_spec_12,
      param_spec_13,
      param_spec_14,
      param_spec_15,
      param_spec_16,
      param_spec_17,
      param_spec_18,
      param_spec_19,
      param_spec_20,
      param_spec_21,
      param_spec_22,
      param_spec_23,
      value_eq_1,
      value_eq_2,
      value_eq_3,
      value_eq_4,
      value_eq_5,
      value_eq_6,
      value_eq_7,
      value_eq_8,
      value_eq_9,
      value_eq_10,
      value_eq_11,
      value_eq_12,
      value_eq_13,
      value_eq_14,
      value_eq_15,
      value_eq_16,
      value_eq_17,
      value_eq_18,
      value_spec_1,
      value_spec_2,
      value_spec_3,
      value_spec_4,
      value_spec_5,
      value_spec_6,
      value_spec_7,
      value_spec_8,
      value_spec_9,
      value_spec_10,
      value_spec_11,
      value_spec_12,
      value_spec_13,
      value_spec_14,
      value_spec_15,
      value_spec_16,
      value_spec_17,
      value_spec_18,
      value_spec_19,
      value_spec_20,
      value_spec_21,
      value_spec_22,
      value_spec_23,
      param_title_1,
      param_title_2,
      param_title_3,
      value_title_1,
      value_title_2,
      value_title_3,
      premium,
      isHorizontal,
      preview,
      secondImg,
      subtitle,
      thirdImg,
      title,
    } = data;
    const titleParams = [
      {
        param: param_title_1,
        value: value_title_1,
      },
      {
        param: param_title_2,
        value: value_title_2,
      },
      {
        param: param_title_3,
        value: value_title_3,
      },
    ];
    const images = [
      { link: firstImg },
      { link: secondImg },
      { link: thirdImg },
      { link: fourthImg },
      { link: fifthImg },
    ];
    const specifications = [
      {
        parameter: param_spec_1,
        value: value_spec_1,
      },
      {
        parameter: param_spec_2,
        value: value_spec_2,
      },
      {
        parameter: param_spec_3,
        value: value_spec_3,
      },
      {
        parameter: param_spec_4,
        value: value_spec_4,
      },
      {
        parameter: param_spec_5,
        value: value_spec_5,
      },
      {
        parameter: param_spec_6,
        value: value_spec_6,
      },
      {
        parameter: param_spec_7,
        value: value_spec_7,
      },
      {
        parameter: param_spec_8,
        value: value_spec_8,
      },
      {
        parameter: param_spec_9,
        value: value_spec_9,
      },
      {
        parameter: param_spec_10,
        value: value_spec_10,
      },
      {
        parameter: param_spec_11,
        value: value_spec_11,
      },
      {
        parameter: param_spec_12,
        value: value_spec_12,
      },
      {
        parameter: param_spec_13,
        value: value_spec_13,
      },
      {
        parameter: param_spec_14,
        value: value_spec_14,
      },
      {
        parameter: param_spec_15,
        value: value_spec_15,
      },
      {
        parameter: param_spec_16,
        value: value_spec_16,
      },
      {
        parameter: param_spec_17,
        value: value_spec_17,
      },
      {
        parameter: param_spec_18,
        value: value_spec_18,
      },
      {
        parameter: param_spec_19,
        value: value_spec_19,
      },
      {
        parameter: param_spec_20,
        value: value_spec_20,
      },
      {
        parameter: param_spec_21,
        value: value_spec_21,
      },
      {
        parameter: param_spec_22,
        value: value_spec_22,
      },
      {
        parameter: param_spec_23,
        value: value_spec_23,
      },
    ];
    const equipment = [
      {
        parameter: param_eq_1,
        value: value_eq_1,
      },
      {
        parameter: param_eq_2,
        value: value_eq_2,
      },
      {
        parameter: param_eq_3,
        value: value_eq_3,
      },
      {
        parameter: param_eq_4,
        value: value_eq_4,
      },
      {
        parameter: param_eq_5,
        value: value_eq_5,
      },
      {
        parameter: param_eq_6,
        value: value_eq_6,
      },
      {
        parameter: param_eq_7,
        value: value_eq_7,
      },
      {
        parameter: param_eq_8,
        value: value_eq_8,
      },
      {
        parameter: param_eq_9,
        value: value_eq_9,
      },
      {
        parameter: param_eq_10,
        value: value_eq_10,
      },
      {
        parameter: param_eq_11,
        value: value_eq_11,
      },
      {
        parameter: param_eq_12,
        value: value_eq_12,
      },
      {
        parameter: param_eq_13,
        value: value_eq_13,
      },
      {
        parameter: param_eq_14,
        value: value_eq_14,
      },
      {
        parameter: param_eq_15,
        value: value_eq_15,
      },
      {
        parameter: param_eq_16,
        value: value_eq_16,
      },
      {
        parameter: param_eq_17,
        value: value_eq_17,
      },
      {
        parameter: param_eq_18,
        value: value_eq_18,
      },
    ];
    const advantages = [
      {
        parameter: param_ad_1,
      },
      {
        parameter: param_ad_2,
      },
      {
        parameter: param_ad_3,
      },
      {
        parameter: param_ad_4,
      },
      {
        parameter: param_ad_5,
      },
      {
        parameter: param_ad_6,
      },
      {
        parameter: param_ad_7,
      },
      {
        parameter: param_ad_8,
      },
      {
        parameter: param_ad_9,
      },
      {
        parameter: param_ad_10,
      },
      {
        parameter: param_ad_11,
      },
    ];

    ApiModel.sendModel({
      title,
      description,
      subtitle,
      premium,
      isHorizontal,
      nameModel,
      nameProduct,
      preview,
      titleParams,
      images,
      movieLink,
      specifications,
      equipment,
      advantages,
      newPrice,
      oldPrice,
    })
      .then((res) => {
        setIsPreloader(false);
        alert(
          "Модель добавлена успешно. Обновления появятся после перезагрузки страницы."
        );
        // e.target.reset();
      })
      .catch((err) => {
        setIsPreloader(false);
        alert(
          "Произошла ошибка. Модель не добавлена, пожалуйста, проверьте правильность заполнения формы."
        );
      });
  }

  //обработка отправки формы
  function handleSubmitAddModelForm(data, e) {
    if (Object.keys(errors).length !== 0) {
      return;
    } else {
      setIsPreloader(true);
      sendModel({ data, e });
    }
  }

  return (
    <form
      className="form form-model"
      id="addModelForm"
      noValidate
      onSubmit={handleSubmit(handleSubmitAddModelForm)}
    >
      {isPreloader ? <Preloader /> : ""}

      <p className="form__text">
        Требования для картинки на карточке товара: <br />
        - разрешение: 741*606 px;
        <br />- должны быть поля вокруг изображения, чтобы масштаб и
        расположение совпадали с другими изображениями на сайте.
      </p>
      <p className="form__text">
        Требования для картинок в модальном окне:
        <br />
        - примерное разрешение: 800*800 px;
        <br />- поля максимально обрезаны для каждого фото.
      </p>
      <label htmlFor="title" className="form__label">
        Группа товаров
      </label>
      {errors.title && (
        <span className="form__error">{errors.title.message}</span>
      )}
      <select
        id="title"
        name="title"
        className="form__input"
        {...register("title")}
      >
        {catalogInfo.map((item) => (
          <option key={item._id} value={item.title}>
            {item.title}
          </option>
        ))}
      </select>

      <label className="form__label">
        <label htmlFor="subtitle" className="form__label">
          Название подгруппы товаров. Если подгруппа существует - просто
          скопируйте с сайта во избежание опечаток и вставьте сюда. *
        </label>
        <input
          type="text"
          id="subtitle"
          name="subtitle"
          className="form__input"
          placeholder="Напр., Классическая серия без газа"
          {...register("subtitle", {
            required: "Это поле обязательно к заполнению",
            minLength: { value: 2, message: "Минимальная длина 2 символа" },
            pattern: {
              value: /^[а-яА-ЯёЁA-Za-z\-\s\(\)]+$/,
              message: "Некорректный формат",
            },
          })}
          onBlur={() => trigger("subtitle")}
        />
        {errors.subtitle && (
          <span className="form__error">{errors.subtitle.message}</span>
        )}
      </label>
      <fieldset className="form__fieldset">
        <h4 className="form__subtitle">Это премиум линейка? *</h4>
        <label className="form__label">
          <label
            className="form__label form__label_type_wrap"
            htmlFor="premium-yes"
          >
            <input
              type="radio"
              id="premium-yes"
              name="premium"
              className="form__input form__input_type_radio"
              {...register("premium", {
                required: "Пожалуйста, выберите один из вариантов",
              })}
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
            {...register("premium", {
              required: "Пожалуйста, выберите один из вариантов",
            })}
            className="form__input form__input_type_radio"
            value="no"
          />
          <label htmlFor="premium" className="form__label">
            Нет
          </label>
        </label>
        {errors.premium && (
          <span className="form__error">{errors.premium.message}</span>
        )}
      </fieldset>

      <label htmlFor="nameModel" className="form__label">
        Номер модели (то, что идет после слова Jonser) *
      </label>
      <input
        type="text"
        id="nameModel"
        name="nameModel"
        className="form__input"
        placeholder="Напр., 180DQX"
        {...register("nameModel", {
          required: "Это поле обязательно к заполнению",
          minLength: { value: 2, message: "Минимальная длина 2 символа" },
          pattern: {
            value: /^[а-яА-ЯёЁA-Za-z\-\s\d\/\(\)\.\,]+$/,
            message: "Некорректный формат",
          },
        })}
        onBlur={() => trigger("subtitle")}
      />
      {errors.nameModel && (
        <span className="form__error">{errors.nameModel.message}</span>
      )}

      <label htmlFor="nameProduct" className="form__label">
        Название товара в единственном числе *
      </label>
      <input
        type="text"
        id="nameProduct"
        name="nameProduct"
        className="form__input"
        placeholder="Напр., Сварочный полуавтомат"
        {...register("nameProduct", {
          required: "Это поле обязательно к заполнению",
          minLength: { value: 2, message: "Минимальная длина 2 символа" },
          pattern: {
            value: /^[а-яА-ЯёЁA-Za-z\-\s\(\)]+$/,
            message: "Некорректный формат",
          },
        })}
        onBlur={() => trigger("nameProduct")}
      />
      {errors.nameProduct && (
        <span className="form__error">{errors.nameProduct.message}</span>
      )}

      <label htmlFor="nameProduct" className="form__label">
        Описание товара
      </label>
      <input
        type="text"
        id="description"
        name="description"
        className="form__input"
        placeholder="Текст, который будет во всплывающем окне под заголовком. Заполнять необязательно. "
        {...register("description", {
          pattern: {
            value: /^[а-яА-ЯёЁA-Za-z\-\d\s\(\)\.\,]+$/,
            message: "Некорректный формат",
          },
        })}
        onBlur={() => trigger("description")}
      />
      {errors.description && (
        <span className="form__error">{errors.description.message}</span>
      )}

      <label htmlFor="movieLink" className="form__label">
        Ссылка на Youtube
      </label>
      <input
        type="url"
        id="movieLink"
        name="movieLink"
        className="form__input"
        placeholder="URL"
        {...register("movieLink", {
          pattern: {
            value: /https*:\/\/[w{3}.]?[\S]+#?\.[\S]+/i,
            message: "Некорректный URL",
          },
        })}
        onBlur={() => trigger("movieLink")}
      />
      {errors.movieLink && (
        <span className="form__error">{errors.movieLink.message}</span>
      )}

      <label htmlFor="preview" className="form__label">
        Ссылка на превью * (картинка, которая будет на карточке товара).
      </label>
      <input
        type="url"
        id="preview"
        name="preview"
        className="form__input"
        placeholder="URL"
        {...register("preview", {
          required: "Это поле обязательно к заполнению",
          pattern: {
            value: /https*:\/\/[w{3}.]?[\S]+#?\.[\S]+/i,
            message: "Некорректный URL",
          },
        })}
        onBlur={() => trigger("preview")}
      />
      {errors.preview && (
        <span className="form__error">{errors.preview.message}</span>
      )}

      {/* <fieldset className="form__fieldset">
        <h4 className="form__subtitle">
          У превью горизонтальная ориентация? (Например, как у пил) *
        </h4>
        <label className="form__label">
          <label
            className="form__label form__label_type_wrap"
            htmlFor="isHorizontal-yes"
          >
            <input
              type="radio"
              id="isHorizontal-yes"
              name="isHorizontal"
              className="form__input form__input_type_radio"
              {...register("isHorizontal", {
                required: "Пожалуйста, выберите один из вариантов",
              })}
              value="yes"
            />
            <label htmlFor="isHorizontal" className="form__label">
              Да
            </label>
          </label>
        </label>
        <label
          className="form__label form__label_type_wrap"
          htmlFor="isHorizontal-no"
        >
          <input
            type="radio"
            id="isHorizontal-no"
            name="isHorizontal"
            {...register("isHorizontal", {
              required: "Пожалуйста, выберите один из вариантов",
            })}
            className="form__input form__input_type_radio"
            value="no"
          />
          <label htmlFor="isHorizontal" className="form__label">
            Нет
          </label>
        </label>
        {errors.isHorizontal && (
          <span className="form__error">{errors.isHorizontal.message}</span>
        )}
      </fieldset> */}

      <fieldset className="form__fieldset">
        <h4 className="form__subtitle">Параметры на карточке товара</h4>
        <p className="form__text">
          Желательно заполнять два поля, но можно одно или три. В конце не
          оставляем пробелы и другие знаки препинания.
        </p>
        {renderInputs("Параметр", "Значение", "title", 3)}
      </fieldset>

      <fieldset className="form__fieldset">
        <h4 className="form__subtitle">
          Ссылки на картинки для модального окна. Можно добавить от 1 до 5 фото.
        </h4>

        <label htmlFor="firstImg" className="form__label">
          Фото 1 *
        </label>
        <input
          type="url"
          id="firstImg"
          name="firstImg"
          className="form__input"
          placeholder="URL"
          {...register("firstImg", {
            required: "Это поле обязательно к заполнению",
            pattern: {
              value: /https*:\/\/[w{3}.]?[\S]+#?\.[\S]+/i,
              message: "Некорректный URL",
            },
          })}
          onBlur={() => trigger("firstImg")}
        />
        {errors.firstImg && (
          <span className="form__error">{errors.firstImg.message}</span>
        )}

        <label htmlFor="secondImg" className="form__label">
          Фото 2
        </label>
        <input
          type="url"
          id="secondImg"
          name="secondImg"
          className="form__input"
          placeholder="URL"
          {...register("secondImg", {
            pattern: {
              value: /https*:\/\/[w{3}.]?[\S]+#?\.[\S]+/i,
              message: "Некорректный URL",
            },
          })}
          onBlur={() => trigger("secondImg")}
        />
        {errors.secondImg && (
          <span className="form__error">{errors.secondImg.message}</span>
        )}

        <label htmlFor="thirdImg" className="form__label">
          Фото 3
        </label>
        <input
          type="url"
          id="thirdImg"
          name="thirdImg"
          className="form__input"
          placeholder="URL"
          {...register("thirdImg", {
            pattern: {
              value: /https*:\/\/[w{3}.]?[\S]+#?\.[\S]+/i,
              message: "Некорректный URL",
            },
          })}
          onBlur={() => trigger("thirdImg")}
        />
        {errors.thirdImg && (
          <span className="form__error">{errors.thirdImg.message}</span>
        )}

        <label htmlFor="fourthImg" className="form__label">
          Фото 4
        </label>
        <input
          type="url"
          id="fourthImg"
          name="fourthImg"
          className="form__input"
          placeholder="URL"
          {...register("fourthImg", {
            pattern: {
              value: /https*:\/\/[w{3}.]?[\S]+#?\.[\S]+/i,
              message: "Некорректный URL",
            },
          })}
          onBlur={() => trigger("fourthImg")}
        />
        {errors.fourthImg && (
          <span className="form__error">{errors.fourthImg.message}</span>
        )}

        <label htmlFor="fifthImg" className="form__label">
          Фото 5
        </label>
        <input
          type="url"
          id="fifthImg"
          name="fifthImg"
          className="form__input"
          placeholder="URL"
          {...register("fifthImg", {
            pattern: {
              value: /https*:\/\/[w{3}.]?[\S]+#?\.[\S]+/i,
              message: "Некорректный URL",
            },
          })}
          onBlur={() => trigger("fifthImg")}
        />
        {errors.fifthImg && (
          <span className="form__error">{errors.fifthImg.message}</span>
        )}
      </fieldset>

      <fieldset className="form__fieldset">
        <h4 className="form__subtitle">Характеристики</h4>
        <p className="form__text">
          Характеристики и значения начинаем писать с большой буквы. В конце не
          оставляем пробелы и другие знаки препинания, и не забываем соблюдать
          регистр, где необходимо.
        </p>
        <div className="form__wrap">
          {renderInputs("Характеристика", "Значение", "spec", 23)}
        </div>
      </fieldset>

      <fieldset className="form__fieldset">
        <h4 className="form__subtitle">Комплектация</h4>
        <p className="form__text">
          Комплектацию и значения начинаем писать с большой буквы. В конце не
          оставляем пробелы и другие знаки препинания, и не забываем соблюдать
          регистр, где необходимо.
        </p>

        <div className="form__wrap">
          {renderInputs("Наименование", "Количество", "eq", 18)}
        </div>
      </fieldset>

      <fieldset className="form__fieldset">
        <h4 className="form__subtitle">Преимущества</h4>
        <p className="form__text">
          Пишем без нумерации, с большой буквы. В конце не оставляем пробелы и
          другие знаки препинания.
        </p>
        <div className="form__wrap">
          {renderInputs("Преимущество ", "", "ad", 11)}
        </div>
      </fieldset>

      <fieldset className="form__fieldset">
        <label htmlFor="newPrice" className="form__label">
          Новая цена. *
        </label>
        <input
          type="number"
          id="newPrice"
          name="newPrice"
          className="form__input"
          placeholder="Напр., 86299"
          {...register("newPrice", {
            required: "Это поле обязательно к заполнению",
            minLength: { value: 2, message: "Минимальная длина 2 символа" },
            pattern: {
              value: /^[\d]+$/,
              message: "Некорректный формат",
            },
          })}
          onBlur={() => trigger("newPrice")}
        />
        {errors.newPrice && (
          <span className="form__error">{errors.newPrice.message}</span>
        )}

        <label htmlFor="oldPrice" className="form__label">
          Старая цена *
        </label>
        <input
          type="number"
          id="oldPrice"
          name="oldPrice"
          className="form__input"
          placeholder="Напр., 99990"
          {...register("oldPrice", {
            required: "Это поле обязательно к заполнению",
            minLength: { value: 2, message: "Минимальная длина 2 символа" },
            pattern: {
              value: /^[\d]+$/,
              message: "Некорректный формат",
            },
          })}
          onBlur={() => trigger("oldPrice")}
        />
        {errors.oldPrice && (
          <span className="form__error">{errors.oldPrice.message}</span>
        )}
      </fieldset>
      <button
        type="submit"
        className={`form__btn button_color_light ${
          Object.keys(errors).length === 0 ? "" : "form__btn_type_disabled"
        }`}
      >
        Создать
      </button>
    </form>
  );
}

export default AddModelForm;
