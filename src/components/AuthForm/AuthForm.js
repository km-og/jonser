import "./AuthForm.css";

function AuthForm({ title, textBtn, onSubmitForm, onChangeInput, formValue }) {
  return (
    <section className="auth">
      <h2 className="auth__title">{title}</h2>
      <form className="auth__form" onSubmit={onSubmitForm}>
        <input
          id="userLogin"
          type="text"
          className="auth__input auth__input_type_login"
          name="login"
          placeholder="Логин"
          value={formValue.login || ""}
          onChange={onChangeInput}
          required
          minLength="2"
          maxLength="200"
        />
        <input
          id="password-input"
          type="password"
          className="auth__input auth__input_type_password"
          name="password"
          placeholder="Пароль"
          value={formValue.password || ""}
          onChange={onChangeInput}
          required
          minLength="6"
          maxLength="200"
        />
        <button type="submit" className="auth__button button_color_light">
          {textBtn}
        </button>
      </form>
    </section>
  );
}

export default AuthForm;
