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
        className="collection__model-img"
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
        className="collection__btn cursor"
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
