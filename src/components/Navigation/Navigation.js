import ScrollToTopOnMount from "../ScrollToTopOnMount/ScrollToTopOnMount";
import "./Navigation.css";
import { Link, NavLink } from "react-router-dom";

function Navigation({ handleClick }) {
  return (
    <div className="navigation">
      <ScrollToTopOnMount />
      <button
        type="button"
        aria-label="Закрыть"
        className="navigation__btn cursor"
        onClick={handleClick}
      ></button>
      <nav>
        <ul className="navigation__list">
          <li className="navigation__item">
            <NavLink
              to="/"
              className="navigation__link link"
              onClick={handleClick}
            >
              Главная
            </NavLink>
          </li>
          <li className="navigation__item">
            <Link
              to={{
                pathname: "/#about",
              }}
              className="navigation__link link"
              onClick={handleClick}
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
              onClick={handleClick}
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
              onClick={handleClick}
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
              onClick={handleClick}
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
