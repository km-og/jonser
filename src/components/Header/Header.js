import "./Header.css";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import logo from "../../images/logo.svg";
import Navigation from "../Navigation/Navigation";
import ScrollToTopOnMount from "../ScrollToTopOnMount/ScrollToTopOnMount";

function Header({ loggedIn, isDarkLinks, isFixedMenu, scrollToTop, signOut }) {
  const [isClickOnBurger, setIsClickOnBurger] = useState(false);

  function handleNavigationMenuShow() {
    setIsClickOnBurger(true);
  }

  function handleNavigationMenuHide() {
    setIsClickOnBurger(false);
  }

  console.log(loggedIn);

  return (
    <header className={`header ${isFixedMenu ? "header__fixed" : ""}`}>
      <ScrollToTopOnMount />
      <div className="header__container">
        <NavLink to="/" className="header__link link" onClick={scrollToTop}>
          <img src={logo} alt="логотип" className="header__logo logo" />
        </NavLink>
        <nav className="header__menu">
          <Link
            to={{
              pathname: "/#about",
            }}
            className={`header__link link ${
              isDarkLinks ? "header__link_color_dark" : ""
            }`}
          >
            О нас
          </Link>
          <Link
            to={{
              pathname: "/#catalog",
            }}
            className={`header__link link ${
              isDarkLinks ? "header__link_color_dark" : ""
            }`}
          >
            Каталог
          </Link>
          <Link
            to="/delivery"
            className={`header__link link ${
              isDarkLinks ? "header__link_color_dark" : ""
            }`}
          >
            Доставка
          </Link>
          <Link
            to="#contacts"
            // to="/#feedback"
            className={`header__link link ${
              isDarkLinks ? "header__link_color_dark" : ""
            }`}
          >
            Контакты
          </Link>
          {loggedIn ? (
            <>
              <Link
                to="/interfaceForAdd"
                className={`header__link link ${
                  isDarkLinks ? "header__link_color_dark" : ""
                }`}
              >
                Интерфейс
              </Link>
              <NavLink
                to="/sign-in"
                className={`header__link link ${
                  isDarkLinks ? "header__link_color_dark" : ""
                }`}
                onClick={signOut}
              >
                Выйти
              </NavLink>
            </>
          ) : (
            ""
          )}
        </nav>

        <div
          className="header__burger cursor"
          onClick={handleNavigationMenuShow}
        ></div>
        {isClickOnBurger ? (
          <Navigation
            handleClick={handleNavigationMenuHide}
            loggedIn={loggedIn}
            signOut={signOut}
          />
        ) : (
          ""
        )}
      </div>
    </header>
  );
}

export default Header;
