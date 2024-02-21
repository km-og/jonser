import "./Delivery.css";
import { NavLink } from "react-router-dom";
import pickup from "../../icons/pickup.svg";
import courier from "../../icons/courier.svg";
import delivery from "../../icons/delivery.svg";

function Delivery() {
  return (
    <section className="delivery">
      <div className="delivery__container">
        <h2 className="delivery__title">Доставка и оплата заказа</h2>
        <p className=" delivery__text">
          Наш бренд "Jonser" предлагает быструю и безопасную доставку своей
          продукции. Мы гарантируем, что Ваш заказ будет доставлен вовремя и без
          повреждений, благодаря профессиональным курьерам и надежной упаковке.
        </p>
        <ul className="delivery__list">
          <li className="delivery__item">
            <img className="delivery__icon" alt="самовывоз" src={pickup} />
            <div className="delivery__wrap">
              <h3 className="delivery__subtitle">Самовывоз</h3>
              <p className="delivery__text">
                Вы можете забрать свой заказ самостоятельно со склада по адресу:
              </p>
              <a
                href="https://yandex.ru/maps/-/CDBSnEo4"
                target="_blank"
                rel="noreferrer"
                className="delivery__link link"
              >
                г. Москва, проектируемый проезд 185 вл.8 стр. 1
              </a>

              <p className="delivery__text">
                При получении вы сможете проверить товар, его внешний вид и
                полноту комплектации.
              </p>
            </div>
          </li>
          <li className="delivery__item">
            <img className="delivery__icon" alt="самовывоз" src={courier} />
            <div className="delivery__wrap">
              <h3 className="delivery__subtitle">Доставка по Москве и МО</h3>
              <p className="delivery__text">
                Если заказ оформлен до 18:00, доставка осуществляется в этот же
                день курьером до указанного Вами адреса.
              </p>
              <p className="delivery__text">
                Оплата наличными или банковской картой после получения товара.
              </p>
            </div>
          </li>
          <li className="delivery__item">
            <img className="delivery__icon" alt="самовывоз" src={delivery} />
            <div className="delivery__wrap">
              <h3 className="delivery__subtitle">Доставка по РФ</h3>
              <p className="delivery__text">
                До вашего города от 1-го дня транспортной компанией СДЭК.
                Стоимость доставки устанавливается ТК.
              </p>
              <p className="delivery__text">
                Оплата производится наложенным платежом при получении в
                транспортной компании.
              </p>
            </div>
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

      <div className="delivery__container">
        <h2 className="delivery__title">Возврат товара</h2>
        <div className="delivery__wrap">
          <p className="delivery__text">
            Обмен и возврат товара осуществляется в соответствии с Законом РФ от
            07.02.1992 N 2300-1 «О защите прав потребителей» и Постановлением
            Правительства РФ от 27.09.2007 N 612 «Об утверждении Правил продажи
            товаров дистанционным способом». Стоимость доставки или пересылки
            возврату не подлежат.
          </p>
          <p className="delivery__text">
            Для вашего удобства мы рекомендуем вам позвонить по телефону{" "}
            <a href="tel:+78003025534" className="delivery__link link">
              +7 800 302 55 34
            </a>
            , и менеджер займется вашим вопросом. Возврат осуществляется на
            основании заполненного заявления и документов, подтверждающих факт и
            условия покупки.
          </p>

          <p className="delivery__text">Желаем вам удачных покупок!</p>
        </div>
      </div>
    </section>
  );
}
export default Delivery;
