const analiseP = document.querySelector(".p-analise");
const historicoP = document.querySelector(".p-historico");
const especialistasP = document.querySelector(".p-especialistas");
const analiseContainer = document.querySelector(".analise-container");
const historicoContainer = document.querySelector(".historico-container");
const especialistaContainer = document.querySelector(".especialista-container")
const animationMenu = (element) => {
  let activeMenu = document.querySelector(".click-active");
  if (activeMenu.classList.contains("click-active")) {
    activeMenu.classList.toggle("click-active");
    activeMenu.classList.toggle("click-disable");
    element.classList.toggle("click-disable");
    element.classList.toggle("click-active");

    console.log(element.classList[0]);
    switch (element.classList[0]) {
      case "especialistas":
        if (element.classList[1] === "click-active" & element.classList[1] != "click-disable") {
          especialistasP.style.display = "flex";
          especialistaContainer.style.display = "flex";
          element.querySelector(".img-especialistas").src =
            "../../frontend/img/home/especialistasColor.svg";
            analiseContainer.style.display ="none";
            historicoContainer.style.display = "none";
            
        } else {
          element.querySelector(".img-especialistas").src =
            "../../frontend/img/home/especialistas.svg";
          especialistasP.style.display = "none";
          especialistaContainer.style.display = "none";

        }

        break;
      case "analise":
        if (element.classList[1] === "click-active") {
          analiseP.style.display = "flex";
          element.querySelector(".img-analise").src =
            "../../frontend/img/home/analiseColor.svg";
            analiseContainer.style.display ="flex";
            historicoContainer.style.display = "none";
            especialistaContainer.style.display = "none";

        } 

        break;
      case "burguer":
        if (element.classList[1] === "click-active") {
          element.querySelector(".img-burguer").src =
          "../../frontend/img/home/burguerColor.svg";
          analiseContainer.style.display ="none";
          historicoContainer.style.display = "flex";
          especialistaContainer.style.display = "none";

          historicoP.style.display = "flex";
        } else {
          element.querySelector(".img-burguer").src =
          "../../frontend/img/home/burguer.svg";
          historicoP.style.display = "none";
          console.log("teste3");
        }
        break;

      default:
        if (element.classList[1] === "click-active") {
          analiseP.style.display = "flex";
       
        } else {
       
          analiseP.style.display = "none";
          console.log("teste4");
        }
        break;
    }switch (activeMenu.classList[0]) {
      case "especialistas":
        if (activeMenu.classList[1] === "click-active") {
          especialistasP.style.display = "flex";
          activeMenu.querySelector(".img-especialistas").src =
            "../../frontend/img/home/especialistasColor.svg";
        } else {
          activeMenu.querySelector(".img-especialistas").src =
            "../../frontend/img/home/especialistas.svg";
          especialistasP.style.display = "none";
  
  console.log("teste5");
        }
  
        break;
      case "analise":
        if (activeMenu.classList[1] === "click-active") {
          analiseP.style.display = "flex";
          activeMenu.querySelector(".img-analise").src =
            "../../frontend/img/home/analiseColor.svg";
        } else {
          activeMenu.querySelector(".img-analise").src =
          "../../frontend/img/home/analise.svg";
          analiseP.style.display = "none";
          console.log("teste6");
        }
  
        break;
      case "burguer":
        if (activeMenu.classList[1] === "click-active") {
          activeMenu.querySelector(".img-burguer").src =
          "../../frontend/img/home/burguerColor.svg";
              historicoP.style.display = "none";
              console.log("teste7");
        } else {
          activeMenu.querySelector(".img-burguer").src =
          "../../frontend/img/home/burguer.svg";
              historicoP.style.display = "none";
              console.log("teste7");
        }

    
        
        break;
  
      default:
        if (activeMenu.classList[1] === "click-active") {
          analiseP.style.display = "flex";
          activeMenu.querySelector(".img-analise").src =
          "../../frontend/img/home/analiseColor.svg";
        } else {
          activeMenu.querySelector(".img-analise").src =
          "../../frontend/img/home/analise.svg";
          analiseP.style.display = "none";
          console.log("teste8");
        }
        break;
    }
    
  }
};

