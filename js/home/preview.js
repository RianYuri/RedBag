const inputFileHome = document.getElementById("input-file-home");
const uploadImage = document.querySelector(".input-file__content");
const previewImage = document.getElementById("preview-image");
const resultImage = document.getElementById("resultImage");
const abrirCamera = document.querySelector(".image-p")
const descriptionImage = document.querySelector(".analise-description")
const imageIsTrue = document.querySelector(".image-true")
const buttonAnalise = document.querySelector(".lets-go")
inputFileHome.addEventListener("change", function (event) {
  const file = event.target.files[0];

  if (file) {
    const reader = new FileReader();
    abrirCamera.style.display = "none"
    imageIsTrue.style.display = "flex";
    buttonAnalise.style.display = "flex";
    uploadImage.style.display = "none";
    descriptionImage.style.display ="none";
    reader.onload = function (e) {
      previewImage.src = e.target.result;
      resultImage.src = e.target.result;
    };

    reader.readAsDataURL(file);
  }
});