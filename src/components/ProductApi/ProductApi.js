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

// отправить данные на сервер
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

// получить данные с сервера
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

// поставить лайк и сохранить

// const saveMovie = (
//   {
//     country,
//     director,
//     duration,
//     year,
//     description,
//     trailerLink,
//     nameRU,
//     nameEN,
//   },
//   image,
//   thumbnail,
//   token,
//   owner
// ) => {
//   return fetch(`${this._url}/movies`, {
//     method: "POST",
//     headers: {
//       Accept: "application/json",
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${token}`,
//     },
//     body: JSON.stringify({
//       country,
//       director,
//       duration,
//       year,
//       description,
//       image,
//       trailerLink,
//       thumbnail,
//       nameRU,
//       nameEN,
//       owner,
//     }),
//   }).then((res) => {
//     return this._checkingStatus(res);
//   });
// };

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
