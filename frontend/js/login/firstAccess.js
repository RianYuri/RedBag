
if(JSON.parse(localStorage.getItem('isNewUser'))){
    document.querySelector('.home-container').classList.add('hidden')
    document.querySelector('.first__access-page').classList.remove('hidden')
}
const firstAccessNextSlider = () => {
    let slider = document.querySelector('.first__access-slider')
    let sliderItemWidth = document.querySelector('.first__access-slider .first__access-texts').clientWidth
    let counterInactive = document.querySelector('.first__access-count:not(.active)')
    if(counterInactive){
        slider.scrollLeft += sliderItemWidth
        let counterAfterActive = document.querySelector('.first__access-count.active:not(.actived__before)')
        counterAfterActive.classList.add('actived__before')
        counterInactive.classList.add('active')
    }else{
        localStorage.setItem('isNewUser', JSON.stringify(false))
        document.querySelector('.first__access-page').classList.add('hidden')
        document.querySelector('.home-container').classList.remove('hidden')
    }
}

const firstAccessSkipSlider = () => {
    localStorage.setItem('isNewUser', JSON.stringify(false))
    document.querySelector('.first__access-page').classList.add('hidden')
    document.querySelector('.home-container').classList.remove('hidden')
}
