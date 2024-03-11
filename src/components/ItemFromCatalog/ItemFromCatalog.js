import { NavLink } from "react-router-dom";

function ItemFromCatalog({ group, loggedIn, onGroupDelete }) {
  function handleDeleteClick() {
    onGroupDelete(group);
  }

  return (
    <li className="catalog__item">
      {loggedIn ? (
        <button
          type="button"
          className="catalog__btn button_color_light"
          onClick={handleDeleteClick}
        >
          Удалить карточку
        </button>
      ) : (
        ""
      )}
      <NavLink to={`${group.route}`} className="catalog__link link">
        <p className="catalog__name">{group.title}</p>
        <img
          src={group.preview}
          alt={group.title}
          className="catalog__preview"
          loading="lazy"
        />
      </NavLink>
    </li>
  );
}

export default ItemFromCatalog;
