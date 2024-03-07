const baseUrl = "https://api.jonser.ru";
// const baseUrl = "http://localhost:3001";

const sendData = (userName, userTel, category) => {
  return fetch(`${baseUrl}/send-form`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userName,
      userTel,
      category,
    }),
  }).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(new Error("Что-то пошло не так..."));
    }
  });
};

export { baseUrl, sendData };
