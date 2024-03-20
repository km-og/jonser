import { useEffect, useState } from "react";
import ItemFromProductCollection from "../ItemFromProductCollection/ItemFromProductCollection";
import "./ProductCollection.css";

function ProductCollection({ subtitle, info, onModelDelete, onUpdatePrices }) {
  const [premium, setPremium] = useState(false);
  const [isHorizontal, setIsHorizontal] = useState(false);
  const [isCollectionInfo, setIsCollectionInfo] = useState([]);

  useEffect(() => {
    //с сервера приходит строка, чтоб не менять бэкенд, решила сделать так
    info[0].premium === "yes" ? setPremium(true) : setPremium(false);

    //сортировка по возрастанию цены
    function sortItems() {
      const isObject = info;
      isObject.sort((a, b) => a.newPrice - b.newPrice);
      setIsCollectionInfo(isObject);
    }

    sortItems();
  }, []);

  //отрисовка подкатегорий
  function renderItems() {
    const items = [];
    isCollectionInfo.forEach((item) => {
      items.push(
        <ItemFromProductCollection
          info={item}
          onModelDelete={onModelDelete}
          onUpdatePrices={onUpdatePrices}
          key={item._id}
        />
      );
    });
    return items;
  }

  return (
    <section className="collection">
      <div
        className={`collection__wrapper ${
          premium ? "collection__wrapper_type_premium" : ""
        }`}
      >
        <h3
          className={`collection__subtitle  ${
            premium ? "collection__subtitle_type_premium" : ""
          }`}
        >
          {subtitle}
        </h3>
        <ul
          className={`collection__list ${
            premium ? "collection__list_type_premium" : ""
          } ${isHorizontal ? "collection__list_type_horizontal" : ""}`}
        >
          {renderItems()}
        </ul>
      </div>
    </section>
  );
}

export default ProductCollection;
