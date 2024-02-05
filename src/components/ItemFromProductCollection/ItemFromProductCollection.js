import { useState } from "react";
import PopupDetailedInfo from "../PopupDetailedInfo/PopupDetailedInfo";
import "./ItemFromProductCollection.css";

function ItemFromProductCollection({
  nameModel,
  nameProduct,
  img,
  titleParams,
  detailed,
}) {
  const [isClickOnMoreBtn, setIsClickOnMoreBtn] = useState(false);

  function handlePopupShow() {
    setIsClickOnMoreBtn(true);
  }

  function handlePopupHide() {
    setIsClickOnMoreBtn(false);
  }
  return (
    <li className="collection__item">
      <img
        src={img}
        alt={detailed.fullNameModel}
        loading="lazy"
        className="collection__model-img cursor"
        onClick={handlePopupShow}
      />
      <p className="collection__model-name">
        <span className="collection__model-name_type_accent">
          {nameProduct}
          <br />
        </span>
        jonser {nameModel}
      </p>
      <div className="collection__params">
        {titleParams
          ? titleParams.map((item) => (
              <p className="collection__param" key={item._id}>
                <span className="collection__param-name">{item.param}</span>{" "}
                {item.value}
              </p>
            ))
          : ""}
      </div>
      <div className="collection__prices">
        <p className="collection__sale">{detailed.sale}</p>
        <p className="collection__new-price">{detailed.newPrice}</p>
        <p className="collection__old-price">{detailed.oldPrice}</p>
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
          <path d="M1 11L7 6L1 1" stroke="black" className="collection__svg" />
          <path d="M9 11L15 6L9 1" stroke="black" className="collection__svg" />
        </svg>
      </button>
      {isClickOnMoreBtn ? (
        <PopupDetailedInfo
          title={nameModel}
          images={detailed.images}
          fullNameModel={detailed.fullNameModel}
          description={detailed.description}
          movieLink={detailed.movieLink}
          specifications={detailed.specifications}
          equipment={detailed.equipment}
          advantages={detailed.advantages}
          sale={detailed.sale}
          newPrice={detailed.newPrice}
          oldPrice={detailed.oldPrice}
          handleClick={handlePopupHide}
        />
      ) : (
        ""
      )}
    </li>
  );
}

export default ItemFromProductCollection;
