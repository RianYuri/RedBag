const container = document.getElementById("main");
const emailSenhaInputs = document.querySelectorAll('.input-email, .input-senha');
const rectangleTop = document.querySelector('.first-rectangle');

setTimeout(() => container.style.display = "none", 4000);

emailSenhaInputs.forEach(input => {
  input.addEventListener('focus', () => rectangleTop.classList.toggle('move-up'));
  input.addEventListener('blur', () => rectangleTop.classList.toggle('move-up'));
});