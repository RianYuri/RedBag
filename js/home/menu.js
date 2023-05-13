const analiseP = document.querySelector(".p-analise");
const historicoP = document.querySelector(".p-historico");
const especialistasP = document.querySelector(".p-especialistas");

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
          element.querySelector(".img-especialistas").src =
            "../../img/home/especialistasColor.svg";
        } else {
          element.querySelector(".img-especialistas").src =
            "../../img/home/especialistas.svg";
          especialistasP.style.display = "none";
        }

        break;
      case "analise":
        if (element.classList[1] === "click-active") {
          analiseP.style.display = "flex";
          element.querySelector(".img-analise").src =
            "../../img/home/analiseColor.svg";
          activeMenu.classList.toggle("active-menu");
        } 

        break;
      case "burguer":
        if (element.classList[1] === "click-active") {
          element.querySelector(".img-burguer").src =
          "../../img/home/burguerColor.svg";
          activeMenu.classList.toggle("active-menu");

          historicoP.style.display = "flex";
        } else {
          element.querySelector(".img-burguer").src =
          "../../img/home/burguer.svg";
          historicoP.style.display = "none";
          console.log("teste3");
        }
        break;

      default:
        if (element.classList[1] === "click-active") {
          analiseP.style.display = "flex";
       
          activeMenu.classList.toggle("active-menu");
        } else {
       
          analiseP.style.display = "none";
          console.log("teste4");
        }
        break;
    }switch (activeMenu.classList[0]) {
      case "especialistas":
        if (activeMenu.classList[1] === "click-active" & activeMenu.classList[1] != "click-disable") {
          especialistasP.style.display = "flex";
          activeMenu.querySelector(".img-especialistas").src =
            "../../img/home/especialistasColor.svg";
        } else {
          activeMenu.querySelector(".img-especialistas").src =
            "../../img/home/especialistas.svg";
          especialistasP.style.display = "none";
          console.log("click active e diferente de click disable")
  
          console.log("teste5");
        }
  
        break;
      case "analise":
        if (activeMenu.classList[1] === "click-active") {
          analiseP.style.display = "flex";
          activeMenu.querySelector(".img-analise").src =
            "../../img/home/analiseColor.svg";
          activeMenu.classList.toggle("active-menu");
        } else {
          activeMenu.querySelector(".img-analise").src =
          "../../img/home/analise.svg";
          analiseP.style.display = "none";
          console.log("teste6");
        }
  
        break;
      case "burguer":
          
      activeMenu.querySelector(".img-burguer").src =
      "../../img/home/burguerColor.svg";
          historicoP.style.display = "none";
          console.log("teste7");
        
        break;
  
      default:
        if (activeMenu.classList[1] === "click-active") {
          analiseP.style.display = "flex";
          activeMenu.querySelector(".img-analise").src =
          "../../img/home/analiseColor.svg";
          activeMenu.classList.toggle("active-menu");
        } else {
          activeMenu.querySelector(".img-analise").src =
          "../../img/home/analise.svg";
          analiseP.style.display = "none";
          console.log("teste8");
        }
        break;
    }
    
  }
};

// // Especialistas
// const especialistas = document.querySelector(".especialistas");
// const analise = document.querySelector(".analise");
// const burguer = document.querySelector(".burguer");
// const especialistasAnimation = (element) => {
//   element.classList.toggle("click-disable");
//   element.classList.toggle("click-active");

//   if (element.classList.contains("click-active")) {
//     element.querySelector(".img-especialistas").src =
//       "../../img/home/analiseColor.svg";
//     especialistasP.style.display = "flex";
//     analise.classList.remove("click-active");
//     analise.classList.add("click-disable");
//     burguer.classList.remove("click-active");
//     burguer.classList.add("click-disable");
//   } else {
//     element.querySelector(".img-especialistas").src =
//       "../../img/home/analise.svg";
//     especialistasP.style.display = "none";
//   }
// };

// // Analise
// const analiseAnimation = (element) => {
//   element.classList.toggle("click-disable");
//   element.classList.toggle("click-active");

//   if (!element.classList.contains("click-active")) {

//   } else {
//     element.querySelector(".analise-line1").style.backgroundColor = "#FAB49E";
//     element.querySelector(".analise-line2").style.backgroundColor = "#FFFFFF";
//   especialistas.classList.remove("click-active");
//   especialistas.classList.add("click-disable");
//   burguer.classList.remove("click-active");
//   burguer.classList.add("click-disable");

//   }
// };

// // Historico
// const historicoAnimation = (element) => {
//   element.classList.toggle("click-disable");
//   element.classList.toggle("click-active");

//   if (element.classList.contains("click-active")) {

//     especialistas.classList.remove("click-active");
//     especialistas.classList.add("click-disable");
//     analise.classList.remove("click-active");
//     analise.classList.add("click-disable");
//   } else {

//   }
// };
