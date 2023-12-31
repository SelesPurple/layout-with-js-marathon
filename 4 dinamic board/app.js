const board = document.querySelector('#board') 
const colors = ['#f46f6f', '#f5a0f5', 'rgb(147, 179, 244)', 'rgb(149, 243, 169)', 'rgb(220, 243, 149)', 'rgb(125, 107, 245)']
const SQUARES_NUMBER = 400

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => setColor(square)) //при наведении мыши
    square.addEventListener('mouseleave', () => removeColor(square))
    board.append(square)
}

function setColor (element) {
    const color = getRandomColor()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}` 
}

function removeColor (element) {
    element.style.backgroundColor = '#1d1d1d'
    element.style.boxShadow = `0 0 2px #000`
}



function getRandomColor () {
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
}