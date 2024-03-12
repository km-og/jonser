import "./Catalog.css";
import ItemFromCatalog from "../ItemFromCatalog/ItemFromCatalog";
import { useContext } from "react";
import { GroupsContext } from "../../contexts/GroupsContexts";

function Catalog({ loggedIn, onGroupDelete, isLoading }) {
  const catalogInfo = useContext(GroupsContext);

  return (
    <div className="catalog" id={"catalog"}>
      {!isLoading && Object.keys(catalogInfo).length !== 0 ? (
        <ul className="catalog__list">
          {catalogInfo.map((item, ind) => (
            <ItemFromCatalog
              loggedIn={loggedIn}
              group={item}
              key={item._id}
              onGroupDelete={onGroupDelete}
            />
          ))}
        </ul>
      ) : (
        ""
      )}
    </div>
  );
}

export default Catalog;
