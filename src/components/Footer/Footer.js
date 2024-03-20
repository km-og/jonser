import { NavLink } from "react-router-dom";
import "./Footer.css";
import logo from "../../images/logo.svg";
import telegram from "../../icons/telegram.svg";
import dzen from "../../icons/dzen.svg";
import inst from "../../icons/inst.svg";
import vk from "../../icons/vk.svg";
import youtube from "../../icons/youtube.svg";
import rutube from "../../icons/rutube.svg";
import ScrollToTopOnMount from "../ScrollToTopOnMount/ScrollToTopOnMount";

function Footer({ scrollToTop }) {
  return (
    <footer className="footer" id="contacts">
      <ScrollToTopOnMount />
      <div className="footer__wrapper">
        <NavLink to="/" className="footer__link link" onClick={scrollToTop}>
          <img src={logo} alt="логотип" className="footer__logo logo" />
        </NavLink>
        <div className="footer__container">
          <a href="tel:+78003025534" className="footer__tel link">
            +7 800 302 55 34
            <span className="footer__department">отдел продаж</span>
          </a>
          <a href="tel:+79091596689" className="footer__tel link">
            +7 909 159 66 89
            <span className="footer__department">сервис</span>
          </a>
          <a href="tel:+79656890863" className="footer__tel link">
            +7 965 689 08 63
            <span className="footer__department">оптовый отдел</span>
          </a>
          <a
            href="https://yandex.ru/maps/-/CDBSnEo4"
            target="_blank"
            rel="noreferrer"
            className="footer__tel link"
          >
            г. Москва, проектируемый проезд 185 вл.8 стр. 1
            <span className="footer__department">Адрес склада</span>
          </a>
          <ul className="footer__list">
            <li className="footer__item">
              <a
                href="https://t.me/Am_market_shop"
                target="_blank"
                rel="noreferrer"
                className="footer__link link"
              >
                <img src={telegram} alt="Telegram" className="footer__icon" />
              </a>
            </li>
            <li className="footer__item">
              <a
                href="https://dzen.ru/ammarket?utm_referrer=ammarket.shop"
                target="_blank"
                rel="noreferrer"
                className="footer__link link"
              >
                <img src={dzen} alt="yandex dzen" className="footer__icon" />
              </a>
            </li>
            <li className="footer__item">
              <a
                href="https://www.instagram.com/_ammarket_?igsh=ZWQ2Znd6YzY0cGR5"
                target="_blank"
                rel="noreferrer"
                className="footer__link link"
              >
                <img src={inst} alt="Instagram" className="footer__icon" />
              </a>
            </li>
            <li className="footer__item">
              <a
                href="https://vk.com/am.market"
                target="_blank"
                rel="noreferrer"
                className="footer__link link"
              >
                <img src={vk} alt="Vk" className="footer__icon" />
              </a>
            </li>
            <li className="footer__item">
              <a
                href="https://www.youtube.com/@AM_MARKET"
                target="_blank"
                rel="noreferrer"
                className="footer__link link"
              >
                <img src={youtube} alt="Youtube" className="footer__icon" />
              </a>
            </li>
            <li className="footer__item">
              <a
                href="https://rutube.ru/channel/32414370/"
                target="_blank"
                rel="noreferrer"
                className="footer__link link"
              >
                <img src={rutube} alt="Rutube" className="footer__icon" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
