import { useEffect, useState } from "react";
import ProductCollection from "../ProductCollection/ProductCollection";
import ScrollToTopOnMount from "../ScrollToTopOnMount/ScrollToTopOnMount";
import "./ProductPage.css";
import sortData from "../../utils/sortData";

function ProductPage({
  title,
  description,
  videoReview,
  modelsInfo,
  onModelDelete,
  onUpdatePrices,
}) {
  const [isGroupedCollections, setIsGroupedCollections] = useState({});

  useEffect(() => {
    //сортировка по подкатегориям
    const groupedCollections = sortData(modelsInfo, "subtitle");
    setIsGroupedCollections(groupedCollections);
  }, [modelsInfo]);

  //отрисовка подкатегорий
  function renderCollections() {
    if (!isGroupedCollections) {
      return;
    }
    const subtitles = Object.keys(isGroupedCollections);
    const collections = [];
    if (subtitles.length !== 0) {
      subtitles.forEach((subtitle, ind) => {
        collections.push(
          <ProductCollection
            key={`${isGroupedCollections[subtitle]}-${ind}`}
            subtitle={subtitle}
            onModelDelete={onModelDelete}
            onUpdatePrices={onUpdatePrices}
            info={isGroupedCollections[subtitle]}
          />
        );
      });
      return collections;
    } else {
      return;
    }
  }

  return (
    <section className="products">
      <ScrollToTopOnMount />
      <div className="products__wrapper">
        <h2 className="products__title">{title}</h2>

        {description ? (
          <p className="products__description">{description}</p>
        ) : (
          ""
        )}
        {videoReview ? (
          <a
            href={videoReview}
            target="_blank"
            rel="noreferrer"
            className="products__link link"
          >
            Обзор на YouTube
          </a>
        ) : (
          ""
        )}
        {renderCollections()}
      </div>
    </section>
  );
}

export default ProductPage;
