const container = document.getElementById("main");
const emailSenhaInputs = document.querySelectorAll('.input-email, .input-senha');
const rectangleTop = document.querySelector('.first-rectangle');
const animationAccount = document.getElementById("dontAccount");
const rectangleTopImg = document.getElementById("rectangle-top");
const rectangleBotImg = document.getElementById("rectangle-bot");

setTimeout(() => container.style.display = "none", 4000);

emailSenhaInputs.forEach(input => {
  input.addEventListener('focus', () => rectangleTop.classList.toggle('move-up'));
  input.addEventListener('blur', () => rectangleTop.classList.toggle('move-up'));
});

animationAccount.addEventListener("click", () => {
  rectangleTopImg.classList.toggle("animation-step__top");
  rectangleBotImg.classList.toggle("animation-step__bot");
  setTimeout(() => {
    rectangleTopImg.classList.toggle("animation-step__top");
    rectangleBotImg.classList.toggle("animation-step__bot");
  }, 1500);
});