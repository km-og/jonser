const baseUrl = "https://api.jonser.ru";

// function checkingStatusReg(res, handleSignUp, handleNotSignUp) {
//   if (res.ok) {
//     handleSignUp();
//     return res.json();
//   } else {
//     handleNotSignUp();
//     return Promise.reject(new Error("Что-то пошло не так..."));
//   }
// }

function checkingStatus(res) {
  if (res.ok) {
    return res.json();
  } else {
    return Promise.reject(new Error("Что-то пошло не так..."));
  }
}

// const register = (email, password, handleSignUp, handleNotSignUp) => {
//   return fetch(`${baseUrl}/signup`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({ email, password }),
//   })
//     .then((res) => {
//       // try {
//       //   if (response.status === 200 || response.status === 201) {
//       //     handleSignUp();
//       //     return response.json();
//       //   } else if (response.status === 400) {
//       //     handleNotSignUp();
//       //     console.log("некорректно заполнено одно из полей ");
//       //   }
//       // } catch (e) {
//       //   return e;
//       // }
//       checkingStatusReg(res, handleSignUp, handleNotSignUp);
//     })
//     .then((res) => {
//       console.log(res);
//       return res;
//     });
// };

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
        localStorage.setItem("token", data.token);
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
