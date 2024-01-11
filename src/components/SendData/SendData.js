const baseUrl = "http://localhost:3001/send-form";

const sendData = (userName, userTel, comment) => {
  return fetch(`${baseUrl}/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userName,
      userTel,
      comment,
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
