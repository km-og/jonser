import { useEffect, useState } from "react";
import "./PopupDetailedInfo.css";
import { Link } from "react-router-dom";
import Slider from "../Slider/Slider";
import deleteEmptyFields from "../../utils/deleteEmptyFields";

function PopupDetailedInfo({
  nameModel,
  nameProduct,
  images,
  description,
  movieLink,
  specifications,
  equipment,
  advantages,
  sale,
  newPrice,
  oldPrice,
  handleClick,
}) {
  const [isShowSpecifications, setIsShowSpecifications] = useState(false);
  const [isShowEquipment, setIsShowEquipment] = useState(false);
  const [isShowAdvantages, setIsShowAdvantages] = useState(false);
  const [isObjectImages, setIsObjectImages] = useState([]);
  const [isObjectSpecifications, setIsObjectSpecifications] = useState([]);
  const [isObjectEquipment, setIsObjectEquipment] = useState([]);
  const [isObjectAdvantages, setIsObjectAdvantages] = useState([]);

  //открытие/закрытик выпадающего списка
  function showMore(e) {
    e.stopPropagation();
    let classList = e.target.classList;
    if (classList.contains("popup__subtitle_type_specifications")) {
      isShowSpecifications
        ? setIsShowSpecifications(false)
        : setIsShowSpecifications(true);
      return;
    }
    if (classList.contains("popup__subtitle_type_equipment")) {
      isShowEquipment ? setIsShowEquipment(false) : setIsShowEquipment(true);
      return;
    }
    if (classList.contains("popup__subtitle_type_advantages")) {
      isShowAdvantages ? setIsShowAdvantages(false) : setIsShowAdvantages(true);
      return;
    }
  }

  //закрытие попапа
  function onClick(e) {
    e.stopPropagation();

    if (e.target.classList.contains("popup__details")) {
      handleClick();
    }
    if (e.target.classList.contains("popup__btn")) {
      handleClick();
    } else {
      return;
    }
  }

  // отрисовка пунктов списка
  function renderListItems(obj, id) {
    const list = [];
    obj.forEach((item) => {
      if (!id) {
        list.push(
          <li className="popup__subitem" key={item._id}>
            <p className="popup__text popup__text_type_parameter">
              {`${item.parameter}:`}
            </p>
            <p className="popup__text popup__text_type_value">{item.value}</p>
          </li>
        );
      } else {
        list.push(
          <li className="popup__text" key={item._id}>
            {item.parameter}
          </li>
        );
      }
    });
    return list;
  }

  useEffect(() => {
    //удаление пустых полей
    setIsObjectImages(deleteEmptyFields(images, "link"));
    setIsObjectSpecifications(deleteEmptyFields(specifications, "parameter"));
    setIsObjectEquipment(deleteEmptyFields(equipment, "parameter"));
    setIsObjectAdvantages(deleteEmptyFields(advantages, "parameter"));

    const closePopupTouchEsc = (e) => {
      if (e.key === "Escape") {
        handleClick();
        document.removeEventListener("keydown", closePopupTouchEsc);
      }
    };

    document.addEventListener("keydown", closePopupTouchEsc);
  }, []);

  return (
    <section className="popup popup__details" onClick={onClick}>
      <div className="popup__container">
        <button
          type="button"
          aria-label="Закрыть"
          className="popup__btn cursor"
          onClick={onClick}
        ></button>
        <Slider images={isObjectImages} nameModel={nameModel} />
        <div className="popup__description">
          <h2 className="popup__title">jonser {nameModel}</h2>
          <p className="popup__text">
            <span className="popup__text_type_bold">{`${nameProduct} Jonser ${nameModel}`}</span>
            {`. ${description}`}
          </p>

          <ul className="popup__list">
            {Object.keys(isObjectSpecifications).length !== 0 ? (
              <li className="popup__item">
                <h3
                  className="popup__subtitle popup__subtitle_type_specifications cursor"
                  onClick={showMore}
                >
                  Характеристики
                  <span
                    className={`popup__icon ${
                      isShowSpecifications
                        ? "popup__icon_type_hide"
                        : "popup__icon_type_show"
                    }`}
                  ></span>
                </h3>
                {isShowSpecifications ? (
                  <ul className="popup__sublist">
                    {renderListItems(isObjectSpecifications)}
                  </ul>
                ) : (
                  ""
                )}
              </li>
            ) : (
              ""
            )}

            {Object.keys(isObjectEquipment).length !== 0 ? (
              <li className="popup__item">
                <h3
                  className="popup__subtitle popup__subtitle_type_equipment cursor"
                  onClick={showMore}
                >
                  Комплектация
                  <span
                    className={`popup__icon ${
                      isShowEquipment
                        ? "popup__icon_type_hide"
                        : "popup__icon_type_show"
                    }`}
                  ></span>
                </h3>
                {isShowEquipment ? (
                  <ul className="popup__sublist">
                    {renderListItems(isObjectEquipment)}
                  </ul>
                ) : (
                  ""
                )}
              </li>
            ) : (
              ""
            )}
            {Object.keys(isObjectAdvantages).length !== 0 ? (
              <li className="popup__item">
                <h3
                  className="popup__subtitle popup__subtitle_type_advantages cursor"
                  onClick={showMore}
                >
                  Преимущества
                  <span
                    className={`popup__icon ${
                      isShowAdvantages
                        ? "popup__icon_type_hide"
                        : "popup__icon_type_show"
                    }`}
                  ></span>
                </h3>
                {isShowAdvantages ? (
                  <ol className="popup__sublist popup__sublist_type_advantages">
                    {renderListItems(isObjectAdvantages, isShowAdvantages)}
                  </ol>
                ) : (
                  ""
                )}
              </li>
            ) : (
              " "
            )}
          </ul>
          {movieLink ? (
            <a
              href={movieLink}
              target="_blank"
              rel="noreferrer"
              className="popup__link link"
            >
              Видео на YouTube
            </a>
          ) : (
            ""
          )}
          <div className="popup__purchase">
            <div className="popup__price">
              <p className="popup__sale">{`-${sale}%`}</p>
              <p className="popup__new-price">{`${newPrice}₽`}</p>
              <p className="popup__old-price">{`${oldPrice}₽`}</p>
            </div>
            <Link to="/#feedback" className="popup__btn-buy button_color_light">
              заказать
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PopupDetailedInfo;
