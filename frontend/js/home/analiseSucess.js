const analiseSucess = document.querySelector(".analise-sucess");
const homeContainer = document.querySelector(".analise-container");
const menuFlutter = document.querySelector(".menu-flutter__container");
const loadingAnaliseBot = document.getElementById("rectangle-bot")
const rectangleTopImg = document.getElementById("rectangle-top")
const iconCat = document.querySelector(".icon-loading")
const loadingContainer = document.querySelector(".loading-container")
  const paragraphResult = document.querySelector(".first-paragraph");
  const precisionHealth = document.querySelector(".porcentHealthy")
const btnEspecialista = document.querySelector(".especialista-btn")
const formAnimal = document.getElementById("animalForm");

const backHome = () =>{
    analiseSucess.style.display = "none";
    homeContainer.style.display = "flex";
    menuFlutter.style.display = "flex";
window.location.reload(true);
   
   
}
btnEspecialista.addEventListener("click" ,()=>{

  analiseSucess.style.display = "none";
  abrirCamera.style.display = "flex"
  imageIsTrue.style.display = "none";
  buttonAnalise.style.display = "none";
  uploadImage.style.display = "flex";
  descriptionImage.style.display ="flex";
  previewImage.src ="../../frontend/img/home/catCamera.svg";
  previewImage.style.width = "118px"
  menuFlutter.style.display = "flex";
  inputFileHome.value="";
  especialistaContainer.style.display = "flex";
  document.querySelector(".especialistas.click-disable").click();
});
const analiseResults = (infoCat) =>{
  const svgElement = document.getElementById('catSucess');
const pathElement = svgElement.querySelector('path');

  loadingAnaliseBot.classList.toggle("loadingBot");
  loadingContainer.style.display = "none";
  rectangleTopImg.classList.toggle("loadingTop");              
  iconCat.style.display = "none"; 
  precisionHealth.innerHTML = Math.ceil(infoCat.prediagnosis.accuracy) + "%";
console.log(infoCat.prediagnosis)
  pathElement.setAttribute('fill', infoCat.color);
  pathElement.setAttribute('stroke', infoCat.color);
if(infoCat.prediagnosis.health == "healthy"){
  paragraphResult.innerHTML = `<b class="nameCat" style="color:${infoCat.color}">${infoCat.name}</b> não possui Membrana Pupilar Persistente.`
}
else{
  paragraphResult.innerHTML = `De acordo com a análise, infelizmente <b class="nameCat"style="color:${infoCat.color}">${infoCat.name}</b> está com Menbrana Pupilar Persistente.`

}
}

