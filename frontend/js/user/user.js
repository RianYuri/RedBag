const editDataContainer = document.querySelector(".myData-edit__container");
const myDataContainer = document.querySelector(".myData-container");
const editBtn = document.querySelector(".edit-button");
const voltar = document.querySelector(".voltar");
editBtn.addEventListener("click",()=>{
    editDataContainer.style.display = "flex";
    myDataContainer.style.display = "none";
});
voltar.addEventListener("click",()=>{
    editDataContainer.style.display = "none";
    myDataContainer.style.display = "flex";
});