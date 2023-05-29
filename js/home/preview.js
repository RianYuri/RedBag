const inputFileHome = document.getElementById("input-file-home");
const previewImage = document.getElementById("preview-image");
const abrirCamera = document.querySelector(".image-p")
inputFileHome.addEventListener("change", function (event) {
  const file = event.target.files[0];

  if (file) {
    const reader = new FileReader();
    abrirCamera.style.display = "none"

    reader.onload = function (e) {
      previewImage.src = e.target.result;
    };

    reader.readAsDataURL(file);
  }
});