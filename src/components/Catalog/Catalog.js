import "./Catalog.css";
import { itemsFromCatalog } from "../../utils/constants";
import ItemFromCatalog from "../ItemFromCatalog/ItemFromCatalog";
// import { Outlet } from "react-router-dom";

function Catalog() {
  return (
    <div className="catalog" id={"catalog"}>
      <ul className="catalog__list">
        {itemsFromCatalog.map((item) => (
          <ItemFromCatalog
            name={item.name}
            alt={item.alt}
            preview={item.img}
            route={item.route}
            key={item._id}
          />
        ))}
      </ul>
      {/* <Outlet /> */}
    </div>
  );
}

export default Catalog;
