const baseUrl = "https://api.jonser.ru";
// const baseUrl = "http://localhost:3001";

const token = localStorage.getItem("tokenJonser");

//проверка статуса ответа
function checkingStatus(res) {
  if (res.ok) {
    return res.json();
  } else {
    return Promise.reject(new Error("Что-то пошло не так..."));
  }
}

// отправить данные на сервер, создать группу товаров
function sendGroup({ title, preview, route, description, order, videoReview }) {
  return fetch(`${baseUrl}/groups`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      title,
      preview,
      route,
      description,
      order,
      videoReview,
    }),
  }).then((res) => {
    return checkingStatus(res);
  });
}

// получить все группы товаров
function getGroups() {
  return fetch(`${baseUrl}/groups`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => {
      return checkingStatus(res);
    })
    .then((res) => {
      return res;
    });
}

//удалит группу
const deleteGroup = (id) => {
  return fetch(`${baseUrl}/groups/${id}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => {
      return checkingStatus(res);
    })
    .then((res) => {
      return res;
    });
};

export { baseUrl, sendGroup, getGroups, deleteGroup };
