const upBtn = document.querySelector('.up-button')
const downBtn = document.querySelector('.down-button')

const sidebar = document.querySelector('.sidebar')

const mainSlide = document.querySelector('.main-slide')
const slidesCount = mainSlide.querySelectorAll('div').length
sidebar.style.top = `-${(slidesCount - 1) * 100}vh`

upBtn.addEventListener('click', () => {

})

downBtn.addEventListener('click', () => {
    
})

function changeSlide (direction) {
    if (direction === 'up') {
        activeSlideIndex++
        if (activeSlideIndex === slidesCount) {
            activeSlideIndex = 0
        }
        else if (direction === 'down') {
            activeSlideIndex--
            if (activeSlideIndex < 0) {
                activeSlideIndex = slidesCount - 1
            }
        }
        
    }
}