import { useEffect } from "react";
import "./PopupDetailedInfo.css";
import { Link } from "react-router-dom";

function PopupDetailedInfo({
  title,
  imgBig,
  fullNameModel,
  description,
  specifications,
  sale,
  newPrice,
  oldPrice,
  handleClick,
}) {
  function onClick(e) {
    e.stopPropagation();

    if (e.target.className === "popup popup__details") {
      handleClick();
    }
    if (e.target.className === "popup__btn cursor") {
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
        <img className="popup__img" src={imgBig} alt={`Модель ${title}`} />
        <div className="popup__description">
          <h2 className="popup__title">jonser {title}</h2>
          <p className="popup__text">
            <span className="popup__text_type_bold">{fullNameModel}</span>
            {description}
          </p>
          <ul className="popup__specifications">
            {specifications.map((item) => (
              <li className="popup__item" key={item._id}>
                <p className="popup__text poppup__text_type_parameter">
                  {item.parameter}
                </p>
                <p className="popup__text">{item.value}</p>
              </li>
            ))}
          </ul>
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
