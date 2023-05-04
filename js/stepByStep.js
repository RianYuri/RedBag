const nextStep = document.getElementById("next-step");
const sectionStep = document.querySelector(".notAccount-content")
const emailContent = document.querySelector(".emailStep-container")
nextStep.addEventListener("click" , ()=>{
    sectionStep.classList.toggle("nextpage");

    setTimeout(()=>{

        emailContent.style.display = "flex";
    },350)
    setTimeout(()=>{
        sectionStep.style.display="none";

    },950);
});
