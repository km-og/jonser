import { useEffect } from "react";
import ProductCollection from "../ProductCollection/ProductCollection";
import ScrollToTopOnMount from "../ScrollToTopOnMount/ScrollToTopOnMount";
import "./ProductPage.css";

function ProductPage({ title, description, videoReview, collections }) {
  // function ProductPage({ infoPage }) {
  useEffect(() => {
    // через апи получаются все товары,
    // фильтруются, которые = productsName
    // получается массив
    // products__title = productsName
  }, []);

  return (
    <section className="products">
      <ScrollToTopOnMount />
      <div className="products__wrapper">
        <h2 className="products__title">{title}</h2>
        {/* <h2 className="products__title">{infoPage.title}</h2> */}
        {/* {infoPage.description
          ? infoPage.description.map((item, ind) => ( */}
        {description ? (
          <p
            className="products__description"
            // key={`products-description-${ind}`}
          >
            {/* {item.text} */}
            {description}
          </p>
        ) : (
          ""
        )}
        {/* {infoPage.videoReview ? ( */}
        {videoReview ? (
          <a
            // href={infoPage.videoReview}
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
        {collections.map((collection, ind) => (
          // {infoPage.collections.map((collection, ind) => (
          <ProductCollection
            subtitle={collection.subtitle}
            subdescription={collection.subdescription}
            // videoReview={collection.videoReview}
            premium={collection.premium}
            isHorizontal={collection.isHorizontal}
            alignImageRight={collection.alignImageRight}
            alignImageTop={collection.alignImageTop}
            models={collection.models}
            // key={collection._id}
            key={`collection-${ind}`}
          />
        ))}
      </div>
    </section>
  );
}

export default ProductPage;
