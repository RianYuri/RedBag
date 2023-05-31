const containerPageRegistered = document.querySelector(
  ".petCadastrados-container"
);
const containerToRegister = document.querySelector(".toRegister-container");
const addPetPage = () => {
  containerPageRegistered.style.display = "none";
  containerToRegister.style.display = "flex";
};
const backHIstoric = () =>{
    containerPageRegistered.style.display = "flex";
    containerToRegister.style.display = "none";
  
}
const backHome = () => {
    window.location.href = "../../pages/home.html";
}

const userId = JSON.parse(localStorage.getItem("userId"));
document
  .getElementById("animalForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    var form = new FormData(document.getElementById("animalForm"));
    var xhr = new XMLHttpRequest();
    xhr.open("POST", `http://127.0.0.1:5502/newanimal/${userId}`, true);
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          var response = JSON.parse(xhr.responseText);
          console.log(response); // Aqui você pode manipular a resposta recebida
        } else {
          console.log("Erro ao enviar o formulário");
        }
      }
    };
    xhr.send(form);
  });

//   preview
const inputFileHome = document.getElementById("inputCadastroFile");
const previewImage = document.getElementById("previewImage");
const abrirCamera = document.querySelector(".image-p");
inputFileHome.addEventListener("change", function (event) {
  const file = event.target.files[0];

  if (file) {
    const reader = new FileReader();
    abrirCamera.style.display = "none";

    reader.onload = function (e) {
      previewImage.src = e.target.result;
    };

    reader.readAsDataURL(file);
  }
});
