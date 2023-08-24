const item = document.querySelector('.item') // такой метод потому что нужен всего один элемент
item.addEventListener('dragstart', dragstart)
item.addEventListener('dragend', dragend)

function dragstart(event) {
    console.log('drag start!!!!', event.target) //event target это и есть элемент
    event.target.classList.add('hold')
}
function dragend(event) {
    console.log('drag end!!!!')
    event.target.classList.revove('hold')
}