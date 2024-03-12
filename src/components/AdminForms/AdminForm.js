import "./AdminForm.css";
import AddGroupForm from "./AddGroupForm";
import AddModelForm from "./AddModelForm";

function AdminForm({ title, groupForm, modelForm }) {
  return (
    <>
      <h3 className="form__title">{title}</h3>
      <p className="form__text">
        Поля со звездочкой обязательны к заполнению. Везде необходимо соблюдать
        нужный регистр.
      </p>
      <p className="form__text">
        Картинку нужно выложить{" "}
        <a
          href="https://imgbb.com/"
          target="_balnk"
          rel="noreferrer"
          className="link form__link"
        >
          сюда
        </a>
        . "Начать загрузку", выбрать нужную картинку (желательно, чтоб картинка
        была в формате .webp), в "автоудалении изображений" выбрать "никогда не
        удалять", "загрузка". Далее в поле "коды для встраивания" нужно выбрать
        "HTML-код полноразмерного со ссылкой". В поле ниже сформируется код, из
        него нужно взять только то, что идет внутри кавычек {'<img src="">'},
        эту ссылку и нужно использовать. То есть нужна прямая ссылка на
        картинку, чтобы при переходе по этой ссылке изображение открывалось в
        новом окне браузера. На всякий случай оставляю{" "}
        <a
          href="https://docs.google.com/document/d/14bE7P_3dctRSg7LBNxM0lf8-fJRxAK-tn0sTJLKlzNM/edit?usp=sharing"
          target="_balnk"
          rel="noreferrer"
          className="link form__link"
        >
          инструкцию со скриншотами.
        </a>
      </p>
      {groupForm ? <AddGroupForm /> : ""}

      {modelForm ? <AddModelForm /> : ""}
    </>
  );
}

export default AdminForm;
