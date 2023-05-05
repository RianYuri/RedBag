const nextStep = document.getElementById("next-step");
const emailStep = document.getElementById("next-step__password");
const sectionStep = document.querySelector(".notAccount-content");
const emailContent = document.querySelector(".emailStep-container");
const passwordStep = document.querySelector(".passwordStep-container");
nextStep.addEventListener("click" , ()=>{
    sectionStep.classList.toggle("leftPage");

    setTimeout(()=>{
        emailContent.classList.toggle("nextpage")
        emailContent.style.display = "flex";
    },450)
    setTimeout(()=>{
        sectionStep.style.display="none";

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

