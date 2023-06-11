const nextStep = document.getElementById("next-step");
const emailStep = document.getElementById("next-step__password");
const passwordStep = document.querySelector(".passwordStep-container");

const emailContent = document.querySelector(".emailStep-container");
const nameContent01 = document.querySelector(".notAccount-content")


nextStep.addEventListener("click" , ()=>{
    nameContent01.classList.toggle("leftPage");
console.log("teste")
setTimeout(()=>{
        emailContent.style.display = "flex";
        emailContent.classList.toggle("nextpage")
    },450)
    setTimeout(()=>{
        nameContent01.style.display="none";

    },450);
});
emailStep.addEventListener("click" , ()=>{
    emailContent.classList.toggle("nextpage")

    emailContent.classList.toggle("leftPage");
    setTimeout(()=>{

        passwordStep.style.display = "flex";
    },450)
    setTimeout(()=>{

        emailContent.style.display = "none";
    },450)
});

