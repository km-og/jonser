import { NavLink } from "react-router-dom";

function ItemFromCatalog({ name, alt, preview, route }) {
  return (
    <li className="catalog__item">
      <NavLink to={`${route}`} className="catalog__link card-animation">
        <p className="catalog__name">{name}</p>
        <img src={preview} alt={alt} className="catalog__preview" />
      </NavLink>
    </li>
  );
}

export default ItemFromCatalog;
