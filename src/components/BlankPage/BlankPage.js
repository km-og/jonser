import { NavLink } from "react-router-dom";

function BlankPage() {
  return (
    <section className="not-found">
      <div className="not-found__container">
        <h2 className="not-found__title">Ой</h2>
        <p className="not-found__text">
          Здесь пока что нет информации, пожалуйста, зайдите позднее.
        </p>
        <NavLink to="/" className="not-found__link link">
          Вернуться на главную страницу
        </NavLink>
      </div>
    </section>
  );
}

export default BlankPage;
