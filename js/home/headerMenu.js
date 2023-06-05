let menuBtn = document.querySelector('.header-home__container menu.menu-burguer')
let menuContainer = document.querySelector('.nav-items__container')
menuBtn.addEventListener('click', () => {
    setTimeout(()=>{
        
        menuContainer.classList.toggle('active')
    },100)
    if(!menuContainer.classList.contains("navOpenFlex")){

        menuContainer.classList.toggle("navOpenFlex")
    }else{
        setTimeout(()=>{
        
            menuContainer.classList.toggle('navOpenFlex')
        },350)
    }
    
    menuBtn.classList.toggle('active')
})


const clearUserLoginDataAndLogout = () => {
    localStorage.clear();
    window.location.href = "../../index.html";
} 