
console.log('firstAccess.js loaded', JSON.parse(localStorage.getItem('isNewUser')))
if(JSON.parse(localStorage.getItem('isNewUser'))){
    document.querySelector('.home-container').classList.toggle('hidden')
    document.querySelector('.first__access-page').classList.toggle('hidden')
}