import { useEffect, useState } from "react";
import AuthForm from "../AuthForm/AuthForm";
import { useNavigate } from "react-router-dom";

function Login({ handleSubmitLogin, loggedIn }) {
  const [formValue, setFormValue] = useState({
    login: "",
    password: "",
  });
  const { login, password } = formValue;
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };

  function handleSubmit(e) {
    e.preventDefault();

    if (!formValue.login || !formValue.password) {
      return;
    }
    handleSubmitLogin({ login, password, setFormValue });
  }

  useEffect(() => {
    if (loggedIn) {
      navigate("/", { replace: true });
    } else return;
  }, []);

  return (
    <AuthForm
      title="Вход"
      textBtn="Войти"
      onSubmitForm={handleSubmit}
      onChangeInput={handleChange}
      formValue={formValue}
    />
  );
}

export default Login;
