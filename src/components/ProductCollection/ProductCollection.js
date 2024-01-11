import ItemFromProductCollection from "../ItemFromProductCollection/ItemFromProductCollection";
import "./ProductCollection.css";

function ProductCollection({
  subtitle,
  premium,
  isHorizontal,
  alignImageRight,
  alignImageTop,
  models,
}) {
  return (
    <div className="collection">
      <h3 className="collection__subtitle">{subtitle}</h3>
      {premium ? (
        <div className="collection__container collection__container_type_premium">
          <ul
            className={`collection__list ${
              premium ? "collection__list_type_premium" : ""
            } `}
          >
            {models.map((model) => (
              <ItemFromProductCollection
                nameModel={model.nameModel}
                img={model.img}
                detailed={model.detailed}
                key={model._id}
                premium={premium}
              />
            ))}
          </ul>
        </div>
      ) : (
        <ul
          className={`collection__list ${
            premium ? "collection__list_type_premium" : ""
          } ${isHorizontal ? "collection__list_type_horizontal" : ""}`}
        >
          {models.map((model) => (
            <ItemFromProductCollection
              nameModel={model.nameModel}
              img={model.img}
              detailed={model.detailed}
              key={model._id}
              premium={premium}
              isHorizontal={isHorizontal}
              alignImageRight={alignImageRight}
              alignImageTop={alignImageTop}
            />
          ))}
        </ul>
      )}
    </div>
  );
}

export default ProductCollection;
