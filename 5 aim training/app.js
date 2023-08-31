const startBtn = document.querySelector('#start')

const screens = document.querySelectorAll('.screen')

const timeList = document.querySelector('#time-list')

const timeEl = document.querySelector('#time')

const board = document.querySelector('#board')
let time = 0
let score = 0
let miss = 0

const colors = ['#f46f6f', '#f5a0f5', 'rgb(147, 179, 244)', 'rgb(149, 243, 169)', 'rgb(220, 243, 149)', 'rgb(125, 107, 245)']

function setColor (element) {
    const index = Math.floor(Math.random() * colors.length)
    element.style.background = colors[index]
}

startBtn.addEventListener('click', (event) => {
    event.preventDefault()
    screens[0].classList.add('up')
})
timeList.addEventListener('click', event => { // делегирование событий
    if (event.target.classList.contains('time-btn')) {
        time = parseInt(event.target.getAttribute('data-time'))
        screens[1].classList.add('up')
        startGame()
    }
})

board.addEventListener('click', event => {
    if (event.target.classList.contains('circle')) {
        score++
        console.log('score', score)
    } else if (event.target.closest('.circle') === null) {
        miss++
        console.log(score)
        console.log(miss)
        
    }
    event.target.remove()
    createRandomCircle()

})
// DEBUG
// startGame()
function startGame () {
    setInterval(decreaseTime, 1000)
    createRandomCircle()
    setTime(time)
}

function decreaseTime () {
    if (time === 0) {
        finishGame ()
    }
    else {
        let current = --time
        if (current < 10) {
            current = `0${current}`
        }
        setTime(current)
        }
}

function setTime (value) {
    timeEl.innerHTML = `00:${value}`
}

function finishGame () {
    timeEl.parentNode.classList.add('hide')
    board.innerHTML = `<h1>Score: <span class='primary'>${score}</span></h1>`

}

function createRandomCircle() {
    const circle = document.createElement('div')
    const size = getRandomNumber(8, 40)
    const {width, height} = board.getBoundingClientRect()

    const x = getRandomNumber(0, width - size)
    const y = getRandomNumber(0, height - size)

    circle.classList.add('circle')
    circle.style.width = `${size}px`
    circle.style.height = `${size}px`
    circle.style.top = `${y}px`
    circle.style.left = `${x}px`
    setColor(circle)
    board.append(circle)
}

function getRandomNumber (min, max) {
    return Math.round(Math.random() * (max - min) + min)
}