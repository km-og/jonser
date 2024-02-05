import ProductCollection from "../ProductCollection/ProductCollection";
import ScrollToTopOnMount from "../ScrollToTopOnMount/ScrollToTopOnMount";
import "./ProductPage.css";

function ProductPage({ infoPage }) {
  return (
    <section className="products">
      <ScrollToTopOnMount />
      <div className="products__wrapper">
        <h2 className="products__title">{infoPage.title}</h2>
        {infoPage.description
          ? infoPage.description.map((item, ind) => (
              <p
                className="products__description"
                // key={item._id}
                key={`products-description-${ind}`}
              >
                {item.text}
              </p>
            ))
          : ""}
        {infoPage.videoReview ? (
          <a
            href={infoPage.videoReview}
            target="_blank"
            rel="noreferrer"
            className="products__link link"
          >
            Обзор на YouTube
          </a>
        ) : (
          ""
        )}
        {infoPage.collections.map((collection, ind) => (
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
