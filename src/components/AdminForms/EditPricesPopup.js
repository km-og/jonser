import { useEffect } from "react";
import "./AdminForm.css";
import "./EditPricesPopup.css";
import { useForm } from "react-hook-form";

function EditPricesPopup({ onClose, onUpdatePrices, onClosePopup }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
  } = useForm();

  function handleSubmitNewPrices(data, e) {
    if (Object.keys(errors).length !== 0) {
      return;
    } else {
      onUpdatePrices(data);
      e.target.reset();
      onClose();
    }
  }

  function closePopup(e) {
    e.stopPropagation();

    if (e.target.classList.contains("popup__edit-price")) {
      onClosePopup();
    }
    if (e.target.classList.contains("popup__btn")) {
      onClosePopup();
    } else {
      return;
    }
  }

  useEffect(() => {
    const closePopupTouchEsc = (e) => {
      if (e.key === "Escape") {
        onClosePopup();
        document.removeEventListener("keydown", closePopupTouchEsc);
      }
    };
    document.addEventListener("keydown", closePopupTouchEsc);
  }, []);

  return (
    <section className="popup popup__edit-price" onClick={closePopup}>
      <div className="popup__container">
        <button
          type="button"
          aria-label="Закрыть"
          className="popup__btn cursor"
          onClick={closePopup}
        ></button>

        <h2 className="popup__title">Редактирование цен</h2>
        <form
          // className="popup__form"
          id="addModelForm"
          noValidate
          onSubmit={handleSubmit(handleSubmitNewPrices)}
        >
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
            Отправить
          </button>
        </form>
      </div>
    </section>
  );
}

export default EditPricesPopup;
