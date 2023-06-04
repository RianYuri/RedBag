const analiseSucess = document.querySelector(".analise-sucess");
const homeContainer = document.querySelector(".analise-container");
const menuFlutter = document.querySelector(".menu-flutter__container");
const loadingAnaliseBot = document.getElementById("rectangle-bot")
const rectangleTopImg = document.getElementById("rectangle-top")
const iconCat = document.querySelector(".icon-loading")
const loadingContainer = document.querySelector(".loading-container")
const svgElement = document.getElementById('catSucess');
const pathElement = svgElement.querySelector('path');
  const nameCat = document.querySelector(".nameCat")
  const precisionHealth = document.querySelector(".porcentHealthy")


const backHome = () =>{
    analiseSucess.style.display = "none";
    homeContainer.style.display = "flex";
    menuFlutter.style.display = "flex";
   
   
}

const analiseResults = (infoCat) =>{
  loadingAnaliseBot.classList.toggle("loadingBot");
  loadingContainer.style.display = "none";
  rectangleTopImg.classList.toggle("loadingTop");              
  iconCat.style.display = "none"; 
  nameCat.innerHTML = infoCat.name;
  precisionHealth.innerHTML = Math.ceil(infoCat.prediagnosis.accuracy) + "%";
  nameCat.style.color = infoCat.color;
console.log(infoCat.prediagnosis.length)
  pathElement.setAttribute('fill', infoCat.color);
  pathElement.setAttribute('stroke', infoCat.color);

}

