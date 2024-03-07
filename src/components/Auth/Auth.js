const baseUrl = "https://api.jonser.ru";

function checkingStatus(res) {
  if (res.ok) {
    return res.json();
  } else {
    return Promise.reject(new Error("Что-то пошло не так..."));
  }
}

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

const getContent = (token) => {
  return fetch(`${baseUrl}/products`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  }).then((res) => {
    return checkingStatus(res);
  });
};

export { baseUrl, authorize, getContent };
