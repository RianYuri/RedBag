const finishedRegister = document.getElementById("finished-register");
const rectangleTopImg = document.getElementById("rectangle-top");
const rectangleBotImg = document.getElementById("rectangle-bot");
const loading = document.querySelector(".loading-container")
const iconCat = document.querySelector(".icon-loading");

  
    


const formSignup = document.getElementById("signup-form");
formSignup.addEventListener("submit", () => {
  let inputName = document.querySelector(".input-name").value;
  let inputEmail = document.querySelector(".input-email").value;
  let inputPassword = document.querySelector(".input-senha").value;
  // Dados do objeto JSON a ser enviado
  
  let data = {
    name: inputName,
    email: inputEmail,
    password: inputPassword,
  };

  const url = "http://127.0.0.1:5501/signup";
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };
  console.log(data);

  // Configurar a requisição
  fetch(url, options)
    .then((response) => response.json())
    .then((data) => {
      rectangleTopImg.classList.toggle("loadingTop");
    rectangleBotImg.classList.toggle("loadingBot");
    iconCat.style.display = "flex";
    loading.style.display="flex";
    setTimeout(()=>{
        window.location.href = "../pages/home.html";
    }, 2500);
      console.log(data); // Manipular a resposta da requisição aqui
    })
    .catch((error) => {
      console.log("Ocorreu um erro:", error);
    });
});
