import { useContext, useEffect, useState } from "react";
import PopupDetailedInfo from "../PopupDetailedInfo/PopupDetailedInfo";
import "./ItemFromProductCollection.css";
import deleteEmptyFields from "../../utils/deleteEmptyFields";
import { AdminContext } from "../../contexts/AdminContexts";
import EditPricesPopup from "../AdminForms/EditPricesPopup";

function ItemFromProductCollection({ info, onModelDelete, onUpdatePrices }) {
  const [isClickOnMoreBtn, setIsClickOnMoreBtn] = useState(false);
  const [sale, setSale] = useState(0);
  const [newPrice, setNewPrice] = useState(0);
  const [oldPrice, setOldPrice] = useState(0);
  const [nameModel, setNameModel] = useState("");
  const [objectTitleParams, setObjectTitleParams] = useState([]);
  const [isPopupUpdatePrices, setIsPopupUpdatePrices] = useState(false);
  const loggedIn = useContext(AdminContext);

  useEffect(() => {
    //удаление пустых полей
    setObjectTitleParams(deleteEmptyFields(info.titleParams, "param"));
  }, []);

  useEffect(() => {
    //расчет скидки
    function calculateSale() {
      const saleValue = Math.floor(
        ((info.oldPrice - info.newPrice) / info.oldPrice) * 100
      );
      setSale(saleValue);
    }

    function localizationPrices() {
      //форматирование стоимости, чтоб тысячи отделялись пробелом
      const newPrice = Number(info.newPrice).toLocaleString("ru-RU");
      const oldPrice = Number(info.oldPrice).toLocaleString("ru-RU");
      setNewPrice(newPrice);
      setOldPrice(oldPrice);
    }

    function toUpperCase() {
      setNameModel(info.nameModel.toUpperCase());
    }

    toUpperCase();
    calculateSale();
    localizationPrices();
  }, [info]);

  function handlePopupShow() {
    setIsClickOnMoreBtn(true);
  }

  function handlePopupHide() {
    setIsClickOnMoreBtn(false);
  }

  function handleDeleteModel() {
    onModelDelete(info);
  }

  function showPopupUpdatePrices() {
    setIsPopupUpdatePrices(true);
  }

  function closePopupUpdatePrices() {
    setIsPopupUpdatePrices(false);
  }

  function handleSubmitNewPrices(data) {
    onUpdatePrices(info, data);
  }

  return (
    <>
      {loggedIn && isPopupUpdatePrices ? (
        <EditPricesPopup
          onClose={closePopupUpdatePrices}
          onUpdatePrices={handleSubmitNewPrices}
          onClosePopup={closePopupUpdatePrices}
        />
      ) : (
        ""
      )}
      <li className="collection__item">
        {loggedIn ? (
          <>
            <div className="collection__admin-buttons">
              <button
                type="button"
                className="collection__admin-btn button_color_light"
                onClick={handleDeleteModel}
              >
                Удалить карточку
              </button>
              <button
                type="button"
                className="collection__admin-btn button_color_light"
                onClick={showPopupUpdatePrices}
              >
                Редактировать цены
              </button>
            </div>
          </>
        ) : (
          ""
        )}
        <img
          src={info.preview}
          alt={info.nameModel}
          loading="lazy"
          className="collection__model-img cursor"
          onClick={handlePopupShow}
        />
        <p className="collection__model-name">
          <span className="collection__model-name_type_accent">
            {info.nameProduct}
            <br />
          </span>
          jonser {info.nameModel}
        </p>
        <div className="collection__params">
          {objectTitleParams
            ? objectTitleParams.map((item) => (
                <p className="collection__param" key={item._id}>
                  <span className="collection__param-name">{item.param}:</span>{" "}
                  {item.value}
                </p>
              ))
            : ""}
        </div>
        <div className="collection__prices">
          <p className="collection__sale">{`-${sale}%`}</p>
          <p className="collection__new-price">{`${newPrice}₽`}</p>
          <p className="collection__old-price">{`${oldPrice}₽`}</p>
        </div>
        <button
          type="button"
          className="collection__btn button_color_light"
          onClick={handlePopupShow}
        >
          Подробнее
          <svg
            width="16"
            height="12"
            viewBox="0 0 16 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 11L7 6L1 1"
              stroke="black"
              className="collection__svg"
            />
            <path
              d="M9 11L15 6L9 1"
              stroke="black"
              className="collection__svg"
            />
          </svg>
        </button>
        {isClickOnMoreBtn ? (
          <PopupDetailedInfo
            nameModel={nameModel}
            images={info.images}
            nameProduct={info.nameProduct}
            description={info.description}
            movieLink={info.movieLink}
            specifications={info.specifications}
            equipment={info.equipment}
            advantages={info.advantages}
            sale={sale}
            newPrice={newPrice}
            oldPrice={oldPrice}
            handleClick={handlePopupHide}
          />
        ) : (
          ""
        )}
      </li>
    </>
  );
}

export default ItemFromProductCollection;
