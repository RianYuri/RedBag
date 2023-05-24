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
      console.log(data); // Manipular a resposta da requisição aqui
    })
    .catch((error) => {
      console.log("Ocorreu um erro:", error);
    });
});
