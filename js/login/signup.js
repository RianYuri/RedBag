const inputName = document.querySelector(".input-name");
const inputEmail = document.querySelector(".input-email");
const inputPassword = document.querySelector(".input-senha");

// Dados do objeto JSON a ser enviado
let nameInput = '';
let emailInput = '';
let passwordInput = '';

    inputName.addEventListener("change", (e) => {
      nameInput = e.target.value;
    });
    inputEmail.addEventListener("change", (e) => {
      emailInput = e.target.value;
    });
    inputPassword.addEventListener("change", (e) => {
      passwordInput = e.target.value;
    });
    const data = {
      name: nameInput,
      email: emailInput,
      password: passwordInput,
    };
    

// Enviar a requisição
const url = "http://127.0.0.1:5502/signup";  
const options = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(data),
};
const requestSignup = () => {
    console.log(data)

  // Configurar a requisição
  fetch(url, options)
    .then((response) => response.json())
    .then((data) => {
      console.log(data); // Manipular a resposta da requisição aqui
    })
    .catch((error) => {
      console.log("Ocorreu um erro:", error);
    });
};
