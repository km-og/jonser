import ScrollToTopOnMount from "../ScrollToTopOnMount/ScrollToTopOnMount";
import "./Navigation.css";
import { Link, NavLink } from "react-router-dom";

function Navigation({ handleClick }) {
  function onClick() {
    handleClick();
  }
  return (
    <div className="navigation">
      <ScrollToTopOnMount />
      <button
        type="button"
        aria-label="Закрыть"
        className="navigation__btn cursor"
        onClick={onClick}
      ></button>
      <nav>
        <ul className="navigation__list">
          <li className="navigation__item">
            <NavLink to="/" className="navigation__link link" onClick={onClick}>
              Главная
            </NavLink>
          </li>
          <li className="navigation__item">
            <Link
              to={{
                pathname: "/#about",
              }}
              className="navigation__link link"
              onClick={onClick}
            >
              О нас
            </Link>
          </li>
          <li className="navigation__item">
            <Link
              to={{
                pathname: "/#catalog",
              }}
              className="navigation__link link"
              onClick={onClick}
            >
              Каталог
            </Link>
          </li>
          <li className="navigation__item">
            <Link
              to={{
                pathname: "/delivery",
              }}
              className="navigation__link link"
              onClick={onClick}
            >
              Доставка
            </Link>
          </li>
          <li className="navigation__item">
            <Link
              to={{
                pathname: "#contacts",
                // pathname: "/#feedback",
              }}
              className="navigation__link link"
              onClick={onClick}
            >
              Контакты
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navigation;
