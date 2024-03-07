import { useState } from "react";
import "./InterfaceForAdd.css";
import AdminForm from "../AdminForm/AdminForm";

function InterfaceForAdd() {
  const [isCreateGroup, setIsCreateGroup] = useState(false);
  // const [isCreateSubgroup, setIsCreateSubgroup] = useState(false);
  const [isCreateModel, setIsCreateModel] = useState(false);
  const [isSubtitle, setIsSubtitle] = useState("");
  const [isVisibleForm, setIsVisibleForm] = useState(false);

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
        <div className="interface__buttons">
          <button
            type="button"
            className="interface__btn interface__btn_creating_group button"
            onClick={handleClick}
          >
            Создать группу товаров
          </button>

          <button
            type="button"
            className="interface__btn interface__btn_creating_model button"
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
