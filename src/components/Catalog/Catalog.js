import "./Catalog.css";
import { itemsFromCatalog } from "../../utils/constants";
import ItemFromCatalog from "../ItemFromCatalog/ItemFromCatalog";
// import { Outlet } from "react-router-dom";

function Catalog({ catalogInfo, loggedIn }) {
  console.log(catalogInfo);
  return (
    <div className="catalog" id={"catalog"}>
      <ul className="catalog__list">
        {itemsFromCatalog.map((item, ind) => (
          <ItemFromCatalog
            loggedIn={loggedIn}
            name={item.name}
            alt={item.alt}
            preview={item.img}
            route={item.route}
            key={`itemsFromCatalog-${ind}`}
            // key={item._id}
          />
        ))}
      </ul>
      {/* <Outlet /> */}
    </div>
  );
}

export default Catalog;
