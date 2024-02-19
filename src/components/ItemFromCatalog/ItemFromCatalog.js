import { NavLink } from "react-router-dom";

function ItemFromCatalog({ name, alt, preview, route }) {
  return (
    <li className="catalog__item">
      <NavLink to={`${route}`} className="catalog__link link">
        <p className="catalog__name">{name}</p>
        <img
          src={preview}
          alt={alt}
          className="catalog__preview"
          loading="lazy"
        />
      </NavLink>
    </li>
  );
}

export default ItemFromCatalog;
