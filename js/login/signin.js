const formLogin = document.querySelector("#loginform");

const getHomeInfo = () => {
    document.querySelector(".hello-user").innerHTML = `Olá, ${JSON.parse(localStorage.getItem("userName"))}!`;
    fetch(`http://127.0.0.1:5502/verifyuser/${JSON.parse(localStorage.getItem("userId"))}`,{
      headers:{
        method: "GET",
        "Content-Type": "application/json",
      }
    })
    .then(res => !res.ok ? window.location.href = "../../index.html" : null)
    .catch(err => console.log(err))
};

window.onload = () => {
  if (window.location.href.includes("pages/home.html")) {
    getHomeInfo();
  }
};

const formSignin = (e) => {
  e.preventDefault();
  const loginEmailInput = document.getElementById("signin-email").value;
  const loginSenhaInput = document.getElementById("signin-senha").value;
  console.log(loginEmailInput, loginSenhaInput);
  fetch("http://127.0.0.1:5502/signin", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ password: loginSenhaInput, email: loginEmailInput }),
  })
    .then((response) => {
      console.log(response);
      if (response.ok) {
       return response.json();

      }
      throw new Error("requisição invalida")
    })
    .then((res) => {
      console.log(res)
      console.log("teste: ", res.name);
      localStorage.setItem("userName", JSON.stringify(res.name));
      localStorage.setItem("userId", JSON.stringify(res.userId));
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
      console.log("Ocorreu um erro:", error.message);
    });
}