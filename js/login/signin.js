const formLogin = document.querySelector("#loginform");


const getHomeInfo = () => {
    console.log("teste")
const nameUser = document.querySelector(".hello-user");

  let {
    password,
    email,
    name: userName,
  } = JSON.parse(localStorage.getItem("userInfo"));
  console.log(JSON.parse(localStorage.getItem("userInfo")));
  let userInfo = fetch("http://127.0.0.1:5502/signin", {
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
  nameUser.innerHTML = `Olá, ${userName}!`;
};

window.onload = () => {
    console.log(window.location.href)
  if (window.location.href.includes("pages/home.html")) {
    getHomeInfo();
  }
  if (!window.location.href.includes("home.html")) {
    formLogin.addEventListener("submit", async (e) => {

        const loginEmailInput = document.getElementById("signin-email").value;
        const loginSenhaInput = document.getElementById("signin-senha").value;
        e.preventDefault();
        await fetch("http://127.0.0.1:5502/signin", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({email:"rian@gmail.com",password:"dawdwa"}),
        })
          .then((response) => {
            if (response.ok) {
             return response.json();
      
            }
            throw new Error("requisação invalida")
          })
          .then((res) => {
            console.log(res);
            rectangleTopImg.classList.toggle("loadingTop");
            rectangleBotImg.classList.toggle("loadingBot");
            iconCat.style.display = "flex";
            loading.style.display = "flex";
      
            setTimeout(() => {
              window.location.href = "../../pages/home.html";
            }, 2500);
            console.log(res); // Manipular a resposta da requisição aqui
          })
          .catch((error) => {
            console.log("Ocorreu um erro:", error);
          });
      });
  }
};
