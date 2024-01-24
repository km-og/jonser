import { useEffect, useState } from "react";
import "./PopupDetailedInfo.css";
import { Link } from "react-router-dom";

function PopupDetailedInfo({
  title,
  imgBig,
  fullNameModel,
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
  const [isSpecifications, setIsSpecifications] = useState(false);
  const [isEquipment, setIsEquipment] = useState(false);
  const [isAdvantages, setIsAdvantages] = useState(false);

  function showMore(e) {
    e.stopPropagation();
    let classList = e.target.classList;
    if (classList.contains("popup__subtitle_type_specifications")) {
      isSpecifications ? setIsSpecifications(false) : setIsSpecifications(true);
      return;
    }
    if (classList.contains("popup__subtitle_type_equipment")) {
      isEquipment ? setIsEquipment(false) : setIsEquipment(true);
      return;
    }
    if (classList.contains("popup__subtitle_type_advantages")) {
      isAdvantages ? setIsAdvantages(false) : setIsAdvantages(true);
      return;
    }
  }

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

  useEffect(() => {
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
      {/* <ScrollToTopOnMount /> */}
      <div className="popup__container">
        <button
          type="button"
          aria-label="Закрыть"
          className="popup__btn cursor"
          onClick={onClick}
        ></button>
        <img
          className="popup__img"
          src={imgBig}
          alt={`Модель ${title}`}
          loading="lazy"
        />
        <div className="popup__description">
          <h2 className="popup__title">jonser {title}</h2>
          <p className="popup__text">
            <span className="popup__text_type_bold">{fullNameModel}</span>
            {description}
          </p>

          <ul className="popup__list">
            {specifications ? (
              <li className="popup__item">
                <h3
                  className="popup__subtitle popup__subtitle_type_specifications cursor"
                  onClick={showMore}
                >
                  Характеристики
                  <span
                    className={`popup__icon ${
                      isSpecifications
                        ? "popup__icon_type_hide"
                        : "popup__icon_type_show"
                    }`}
                  ></span>
                </h3>
                {isSpecifications ? (
                  <ul className="popup__sublist">
                    {specifications.map((item) => (
                      <li className="popup__subitem" key={item._id}>
                        <p className="popup__text popup__text_type_parameter">
                          {item.parameter}
                        </p>
                        <p className="popup__text popup__text_type_value">
                          {item.value}
                        </p>
                      </li>
                    ))}
                  </ul>
                ) : (
                  ""
                )}
              </li>
            ) : (
              ""
            )}
            {equipment ? (
              <li className="popup__item">
                <h3
                  className="popup__subtitle popup__subtitle_type_equipment cursor"
                  onClick={showMore}
                >
                  Комплектация
                  <span
                    className={`popup__icon ${
                      isEquipment
                        ? "popup__icon_type_hide"
                        : "popup__icon_type_show"
                    }`}
                  ></span>
                </h3>
                {isEquipment ? (
                  <ul className="popup__sublist">
                    {equipment.map((item) => (
                      <li className="popup__subitem" key={item._id}>
                        <p className="popup__text popup__text_type_parameter ">
                          {item.parameter}
                        </p>
                        <p className="popup__text popup__text_type_value">
                          {item.value}
                        </p>
                      </li>
                    ))}
                  </ul>
                ) : (
                  ""
                )}
              </li>
            ) : (
              ""
            )}
            {advantages ? (
              <li className="popup__item">
                <h3
                  className="popup__subtitle popup__subtitle_type_advantages cursor"
                  onClick={showMore}
                >
                  Преимущества
                  <span
                    className={`popup__icon ${
                      isAdvantages
                        ? "popup__icon_type_hide"
                        : "popup__icon_type_show"
                    }`}
                  ></span>
                </h3>
                {isAdvantages ? (
                  <ol className="popup__sublist popup__sublist_type_advantages">
                    {advantages.map((item) => (
                      <li className="popup__text" key={item._id}>
                        {item.parameter}
                      </li>
                    ))}
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
              <p className="popup__sale">{sale}</p>
              <p className="popup__new-price">{newPrice}</p>
              <p className="popup__old-price">{oldPrice}</p>
            </div>
            <Link to="/#feedback" className="popup__btn-buy link cursor">
              заказать
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PopupDetailedInfo;
