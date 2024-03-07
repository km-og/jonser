import { NavLink } from "react-router-dom";

function ItemFromCatalog({ name, alt, preview, route, loggedIn }) {
  return (
    <li className="catalog__item">
      {loggedIn ? (
        <button type="button" className="catalog__btn button_color_light">
          Удалить карточку
        </button>
      ) : (
        ""
      )}
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
