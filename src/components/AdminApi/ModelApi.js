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

// добавить новую модель
function sendModel({
  title,
  description,
  subtitle,
  premium,
  isHorizontal,
  nameModel,
  nameProduct,
  preview,
  titleParams,
  images,
  movieLink,
  specifications,
  equipment,
  advantages,
  newPrice,
  oldPrice,
}) {
  return fetch(`${baseUrl}/models`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      title,
      description,
      subtitle,
      premium,
      isHorizontal,
      nameModel,
      nameProduct,
      preview,
      titleParams,
      images,
      movieLink,
      specifications,
      equipment,
      advantages,
      newPrice,
      oldPrice,
    }),
  }).then((res) => {
    return checkingStatus(res);
  });
}

// получить все модели
function getModels() {
  return fetch(`${baseUrl}/models`, {
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

//удалить модель
const deleteModel = (id) => {
  return fetch(`${baseUrl}/models/${id}`, {
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

//изменить цены
const updatePriceModel = ({ id, newPrice, oldPrice }) => {
  return fetch(`${baseUrl}/models/${id}`, {
    method: "PATCH",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ newPrice, oldPrice }),
  })
    .then((res) => {
      return checkingStatus(res);
    })
    .then((res) => {
      return res;
    });
};

export { baseUrl, sendModel, getModels, deleteModel, updatePriceModel };
