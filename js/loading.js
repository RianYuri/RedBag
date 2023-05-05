const finishedRegister = document.getElementById("finished-register");
const rectangleTopImg = document.getElementById("rectangle-top");
const rectangleBotImg = document.getElementById("rectangle-bot");


finishedRegister.addEventListener("click", ()=>{
    console.log("teste");
    rectangleTopImg.classList.toggle("loadingTop");
    rectangleBotImg.classList.toggle("loadingTop");

});