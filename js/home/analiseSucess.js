const analiseSucess = document.querySelector(".analise-sucess");
const homeContainer = document.querySelector(".analise-container");
const menuFlutter = document.querySelector(".menu-flutter__container");
      

const backHome = () =>{
    analiseSucess.style.display = "none";
    homeContainer.style.display = "flex";
    menuFlutter.style.display = "flex";
}

const  analiseResults = (imageId) =>{

    console.log(imageId)
    fetch(`http://127.0.0.1:5502/result/${imageId}`, {
        method: "GET",
        headers: {
          "content-type": "application/json",
        }
      })
        .then((response) => {
           return response.json();
    
})    .then((res) => {
    console.log(res);

}).then((error)=>{
    console.lof(error)
})
}
