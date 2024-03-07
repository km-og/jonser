// const baseUrl = "https://api.jonser.ru";
const baseUrl = "http://localhost:3001";

function checkingStatus(res) {
  if (res.ok) {
    return res.json();
  } else {
    return Promise.reject(new Error("Что-то пошло не так..."));
  }
}

// отправить данные на сервер

function sendGroup(title, preview, route, description, order, token) {
  return fetch(`${baseUrl}/groups`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ title, preview, route, description, order }),
  }).then((res) => {
    return checkingStatus(res);
  });
}

// получить данные с сервера

function getContent(token) {
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

// function getData(token) {
//   return fetch(`${this._url}/movies`, {
//     method: "GET",
//     headers: {
//       Accept: "application/json",
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${token}`,
//     },
//   }).then((res) => {
//     return this._checkingStatus(res);
//   });
// }

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

// const delete = (id, token) => {
//   return fetch(`${this._url}/movies/${id}`, {
//     method: "DELETE",
//     headers: {
//       Accept: "application/json",
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${token}`,
//     },
//   }).then((res) => {
//     return this._checkingStatus(res);
//   });
// }

export { baseUrl, sendGroup, getContent };
