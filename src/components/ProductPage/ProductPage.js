import { useEffect } from "react";
import ProductCollection from "../ProductCollection/ProductCollection";
import ScrollToTopOnMount from "../ScrollToTopOnMount/ScrollToTopOnMount";
import "./ProductPage.css";

function ProductPage({ infoPage, installingColorLinks }) {
  useEffect(() => {
    installingColorLinks();
  }, []);

  return (
    <section className="products">
      <ScrollToTopOnMount />
      <div className="products__wrapper">
        <h2 className="products__title">{infoPage.title}</h2>
        {infoPage.collections.map((collection) => (
          <ProductCollection
            subtitle={collection.subtitle}
            premium={collection.premium}
            isHorizontal={collection.isHorizontal}
            alignImageRight={collection.alignImageRight}
            alignImageTop={collection.alignImageTop}
            models={collection.models}
            key={collection._id}
          />
        ))}
      </div>
    </section>
  );
}

export default ProductPage;
