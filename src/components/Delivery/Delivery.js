import "./Delivery.css";
import { NavLink } from "react-router-dom";

function Delivery() {
  return (
    <section className="delivery">
      <div className="delivery__container">
        <h2 className="delivery__title">Доставка и оплата</h2>
        <p className=" delivery__text">
          Наш бренд "Jonser" предлагает быструю и безопасную доставку своей
          продукции. Мы гарантируем, что Ваш заказ будет доставлен вовремя и без
          повреждений, благодаря профессиональным курьерам и надежной упаковке.
        </p>
        <ul className="delivery__list">
          <li className="delivery__item">
            <h3 className="delivery__subtitle">
              Доставка по Москве и Московской области
            </h3>
            <p className="delivery__text">
              Доставка по Москве и области курьером в день заказа, с оплатой при
              получении.
            </p>
          </li>
          <li className="delivery__item">
            <h3 className="delivery__subtitle">Доставка по РФ</h3>
            <p className="delivery__text">
              До вашего города от 1-го дня транспортной компанией СДЭК.
              Стоимость доставки 500 руб.
            </p>
            <p className="delivery__text">
              Оплата при получении в ТК. Для отправки нужно сообщить ФИО, номер
              телефона и город отправления.
            </p>
          </li>
          <li className="delivery__item">
            <h3 className="delivery__subtitle">Оплата</h3>
            <ul className="delivery__payments">
              <li className="delivery__payment">
                <p className="delivery__text">Наличный расчет.</p>
              </li>
              <li className="delivery__payment">
                <p className="delivery__text">Банковской картой.</p>
              </li>
              <li className="delivery__payment">
                <p className="delivery__text">
                  Наложенным платежом, при получении в транспортной компании.
                </p>
              </li>
            </ul>
          </li>
        </ul>
        <p className="delivery__text">
          По вопросам оплаты и доставки обращайтесь по номеру:{" "}
          <a href="tel:+78003025534" className="delivery__link link">
            +7 800 302 55 34
          </a>
          . Либо заполните{" "}
          <NavLink to="/#feedback" className="delivery__link link">
            форму обратной связи
          </NavLink>{" "}
          и мы сами свяжемся с вами.
        </p>
      </div>
    </section>
  );
}
export default Delivery;
