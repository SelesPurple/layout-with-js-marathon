const item = document.querySelector('.item') // такой метод потому что нужен всего один элемент
const placeholders =  document.querySelectorAll('.placeholder')

item.addEventListener('dragstart', dragstart)
item.addEventListener('dragend', dragend)


for (const placeholder of placeholders) {
    placeholder.addEventListener('dragover', dragover) // если элемент над плейсом
    placeholder.addEventListener('dragenter', dragenter) // элемент на территории плейса 
    placeholder.addEventListener('dragleave', dragleave) // элемент перетащили, но вышли
    placeholder.addEventListener('drop', dragdrop) // отпустили
}
function dragstart(event) {
     //event target это и есть элемент
    event.target.classList.add('hold')
    setTimeout(() => 
        event.target.classList.add('hide'), 0) //функция будет вызвана после выполнения синхронноого кода, даже если в таймере 0
}
function dragend (event) {
    event.target.className = 'item'
}

function dragover (event) {
    event.preventDefault()
}

function dragenter (event) {
    event.target.classList.add('hovered')

}

function dragleave (event) {
    event.target.classList.remove('hovered')

}

function dragdrop (event) {
    event.target.classList.remove('hovered')
    event.target.append(item)
}