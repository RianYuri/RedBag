const finishedRegister = document.getElementById("finished-register");
const rectangleTopImg = document.getElementById("rectangle-top");
const rectangleBotImg = document.getElementById("rectangle-bot");
const loading = document.querySelector(".loading-container")
const iconCat = document.querySelector(".icon-loading");

finishedRegister.addEventListener("click", ()=>{
    console.log("teste");
    rectangleTopImg.classList.toggle("loadingTop");
    rectangleBotImg.classList.toggle("loadingBot");
    iconCat.style.display = "flex";
    loading.style.display="flex";
    setTimeout(()=>{
        window.location.href = "../pages/home.html";
    },2000);
});