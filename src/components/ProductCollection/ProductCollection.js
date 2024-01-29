import ItemFromProductCollection from "../ItemFromProductCollection/ItemFromProductCollection";
import "./ProductCollection.css";

function ProductCollection({ subtitle, premium, isHorizontal, models }) {
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
          {models.map((model) => (
            <ItemFromProductCollection
              nameModel={model.nameModel}
              nameProduct={model.nameProduct}
              img={model.img}
              titleParams={model.titleParams}
              detailed={model.detailed}
              key={model._id}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}

export default ProductCollection;
