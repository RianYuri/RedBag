let menuBtn = document.querySelector('.header-home__container menu.menu-burguer')
let menuContainer = document.querySelector('.nav-items__container')
menuBtn.addEventListener('click', () => {
    menuContainer.classList.toggle('active')
    
    menuBtn.classList.toggle('active')
})