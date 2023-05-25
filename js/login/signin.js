let { password, email } = JSON.parse(localStorage.getItem("userInfo"));

let userInfo =  fetch("http://127.0.0.1:5502/signin", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ password, email }),
})
  .then((response) => response.json())
  .catch((error) => {
    console.log("Ocorreu um erro:", error);
  });
console.log(userInfo);
