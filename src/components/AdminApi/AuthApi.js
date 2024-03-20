const baseUrl = "https://api.jonser.ru";

//проверка статуса ответа
function checkingStatus(res) {
  if (res.ok) {
    return res.json();
  } else {
    return Promise.reject(new Error("Что-то пошло не так..."));
  }
}

//авторизация админа
const authorize = (login, password) => {
  return fetch(`${baseUrl}/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ login, password }),
  })
    .then((res) => {
      return checkingStatus(res);
    })
    .then((data) => {
      if (data.token) {
        localStorage.setItem("tokenJonser", data.token);
        return data;
      }
    });
};

export { baseUrl, authorize };
