const finishedRegister = document.getElementById("finished-register");
const loading = document.querySelector(".loading-container");
const iconCat = document.querySelector(".icon-loading");

const formSignup = document.getElementById("signup-form");
formSignup.addEventListener("submit", (e) => {
  e.preventDefault();
  let inputName = document.querySelector("#signup-name").value;
  let inputEmail = document.querySelector("#signup-email").value;
  let inputPassword = document.querySelector("#signup-senha").value;
  // Dados do objeto JSON a ser enviado

  let data = {
    name: inputName,
    email: inputEmail,
    password: inputPassword,
  };

  console.log(data);

  // Configurar a requisição
  fetch("http://127.0.0.1:5502/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then(async(res) => {
    
      rectangleTopImg.classList.toggle("loadingTop");
      rectangleBotImg.classList.toggle("loadingBot");
      iconCat.style.display = "flex";
      loading.style.display = "flex";

      localStorage.setItem("userInfo",JSON.stringify(data));
      setTimeout(() => {
        window.location.href = "../../pages/home.html";
      }, 2500);
      console.log(res.user_id);
      localStorage.setItem("userId",JSON.stringify(res.user_id));
       // Manipular a resposta da requisição aqui
    })
    .catch((error) => {
      console.log("Ocorreu um erro:", error);
    });
});

