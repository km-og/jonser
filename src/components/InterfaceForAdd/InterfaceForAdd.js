import { useState } from "react";
import "./InterfaceForAdd.css";
import AdminForm from "../AdminForms/AdminForm";

function InterfaceForAdd() {
  const [isCreateGroup, setIsCreateGroup] = useState(false);
  const [isCreateModel, setIsCreateModel] = useState(false);
  const [isSubtitle, setIsSubtitle] = useState("");
  const [isVisibleForm, setIsVisibleForm] = useState(false);

  //открытие формы для добавления группы или модели
  function handleClick(e) {
    setIsVisibleForm(true);
    setIsSubtitle(e.target.innerText);
    if (e.target.classList.contains("interface__btn_creating_group")) {
      setIsCreateGroup(true);
      setIsCreateModel(false);
      return;
    } else {
      setIsCreateGroup(false);
      setIsCreateModel(true);
      return;
    }
  }

  return (
    <section className="interface">
      <div className="interface__container">
        <h2 className="interface__title">Интерфейс добавления товаров</h2>
        <p className="interface__text">
          Поля формы проверяются на корректность введенных данных, поэтому если
          они будут заполнены неверно - отправить форму будет невозможно. Я
          оставила комментарии по правильному заполнению, постаралась учесть все
          возможные ошибки, но могла что-то упустить, поэтому если на каком-то
          этапе заполнения появятся вопросы или сомнения, лучше напишите{" "}
          <a
            href="https://t.me/Km_og"
            target="_blank"
            rel="noreferrer"
            className="interface__link link"
          >
            мне
          </a>
          . Это поможет вам сэкономить время и избежать возможных проблем с
          работой сайта.
        </p>
        <div className="interface__buttons">
          <button
            type="button"
            className="interface__btn interface__btn_creating_group button_color_light"
            onClick={handleClick}
          >
            Создать группу товаров
          </button>

          <button
            type="button"
            className="interface__btn interface__btn_creating_model button_color_light"
            onClick={handleClick}
          >
            Добавить модель товара
          </button>
        </div>
        <div className="interface__form">
          {isVisibleForm ? (
            <AdminForm
              title={isSubtitle}
              groupForm={isCreateGroup}
              modelForm={isCreateModel}
            />
          ) : (
            ""
          )}
        </div>
      </div>
    </section>
  );
}

export default InterfaceForAdd;
