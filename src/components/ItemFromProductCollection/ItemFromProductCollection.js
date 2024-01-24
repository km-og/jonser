import { useState } from "react";
import PopupDetailedInfo from "../PopupDetailedInfo/PopupDetailedInfo";
import "./ItemFromProductCollection.css";

function ItemFromProductCollection({
  nameModel,
  img,
  premium,
  detailed,
  isHorizontal,
  alignImageRight,
  alignImageTop,
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
      <div
        className={`collection__wrap cursor ${
          premium ? "collection__wrap_type_premium" : ""
        }`}
        onClick={handlePopupShow}
      >
        <p className="collection__model-name">
          <span className="collection__model-name_type_accent">jonser</span>{" "}
          {nameModel}
        </p>
        <img
          src={img}
          alt={nameModel}
          loading="lazy"
          className={`collection__model-img ${
            isHorizontal ? "collection__model-img_type_horizontal" : ""
          } ${alignImageRight ? "collection__model-img_type_align-right" : ""}
          ${alignImageTop ? "collection__model-img_type_align-top" : ""}`}
        />
      </div>
      <button
        type="button"
        className={`collection__btn cursor ${
          premium ? "collection__btn_type_premium" : ""
        }`}
        onClick={handlePopupShow}
      >
        Подробнее
      </button>
      {isClickOnMoreBtn ? (
        <PopupDetailedInfo
          title={nameModel}
          imgBig={detailed.imgBig}
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
