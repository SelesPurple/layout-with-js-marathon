const slides = document.querySelectorAll('.slide') // в строковом формате получаем каждый из слайдов

// циклом пройдем по каждому из слайдов и добавим слушателя 
// циклом фор пройдем на каждой итерации создаем переменную слайд
for (const slide of slides) { // надо узнать, когда кликаем по элементу, убрать все классы active и добавить на текующий элемент active. произойдет анимация 
    slide.addEventListener('click', () => {
        clearActiveClasses()
        slide.classList.add('active')
    })
}
// надо убрать с остальных слайдов класс active 

function clearActiveClasses() {
    slides.forEach((slide) => {
        slide.classList.remove('active')
    })
}