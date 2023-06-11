const container = document.getElementById("main");
const emailSenhaInputs = document.querySelectorAll('.input-email, .input-senha, .input-name');
const rectangleTop = document.querySelector('.first-rectangle');
const animationAccount = document.getElementById("dontAccount");
const containerLogin = document.querySelector(".container-login");
const rectangleTopImg = document.getElementById("rectangle-top");
const rectangleBotImg = document.getElementById("rectangle-bot");
const backButtonName = document.getElementById("back-button-nome")
const sectionStep = document.querySelector(".notAccount-container");


setTimeout(() =>{
  container.style.display = "none",
 containerLogin.style.display="flex"
}, 4000);

emailSenhaInputs.forEach(input => {
  input.addEventListener('focus', () => rectangleTop.classList.toggle('move-up'));
  input.addEventListener('blur', () => rectangleTop.classList.toggle('move-up'));
  input.addEventListener('focus', () => rectangleBotImg.classList.toggle('move-down'));
  input.addEventListener('blur', () => rectangleBotImg.classList.toggle('move-down'));

});

animationAccount.addEventListener("click", () => {
  rectangleTopImg.classList.toggle("animation-step__top");
  rectangleBotImg.classList.toggle("animation-step__bot");
  animationAccount.style.display = "none";
  sectionStep.style.display = "flex";

setTimeout(() =>{
  containerLogin.style.display = "none";

},400);

  setTimeout(() => {
    rectangleTopImg.classList.toggle("animation-step__top");
    rectangleBotImg.classList.toggle("animation-step__bot");

  }, 1500);
 
})
// voltar botao 

backButtonName.addEventListener("click", () => {
  rectangleTopImg.classList.toggle("animation-step__top");
  rectangleBotImg.classList.toggle("animation-step__bot");
  animationAccount.style.display = "none";

setTimeout(() =>{
  containerLogin.style.display = "flex";
  animationAccount.style.display = "flex";
  sectionStep.style.display = "none";

},400);

  setTimeout(() => {
    rectangleTopImg.classList.toggle("animation-step__top");
    rectangleBotImg.classList.toggle("animation-step__bot");

  }, 1500);
 
})