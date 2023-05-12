// Especialistas
const especialistasP = document.querySelector(".p-especialistas");

const especialistasAnimation = (element) => {
  element.classList.toggle("click-especialistas");
  if (element.classList.contains("click-especialistas")) {
    element.querySelector(".img-especialistas").src =
      "../../img/home/analiseColor.svg";
    especialistasP.style.display = "flex";
  } else {
    element.querySelector(".img-especialistas").src =
      "../../img/home/analise.svg";
    especialistasP.style.display = "none";
  }
};

// Analise
const analiseP = document.querySelector(".p-analise");
const analiseAnimation = (element) => {
  element.classList.toggle("click-analise");
  if (element.classList.contains("click-analise")) {
    analiseP.style.display = "none";
    element.querySelector(".analise-line1").style.backgroundColor = "#666666";
    element.querySelector(".analise-line2").style.backgroundColor = "#404040";
  } else {
    analiseP.style.display = "flex";
    element.querySelector(".analise-line1").style.backgroundColor = "#FAB49E";
    element.querySelector(".analise-line2").style.backgroundColor = "#FFFFFF";
  }
};

// Historico
const historicoP = document.querySelector(".p-historico");
const historicoAnimation = (element) => {
  element.classList.toggle("click-historico");
  if (element.classList.contains("click-historico")) {
    
    element.querySelector(".line-burguer01").style.backgroundColor = "#FFFFFF";
    element.querySelector(".line-burguer02").style.backgroundColor = "#FAB49E";
    element.querySelector(".line-burguer03").style.backgroundColor = "#FFFFFF";

    historicoP.style.display = "flex";
  } else {
    element.querySelector(".line-burguer01").style.backgroundColor = "#404040";
    element.querySelector(".line-burguer02").style.backgroundColor = "#666666";
    element.querySelector(".line-burguer03").style.backgroundColor = "#404040";
    historicoP.style.display = "none";
  }
};


const animatioMenu = () => {

}