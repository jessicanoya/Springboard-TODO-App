const form = document.querySelector('#todo-form')
const input = document.querySelector('#user-input')
const list = document.querySelector('#list')

form.addEventListener('submit', function(event) {
    event.preventDefault()

    const newTodo = document.createElement('li')
    const removeBtn = document.createElement('button')

    if (input.value !== '') {
        newTodo.innerText = input.value
        removeBtn.innerText = 'Remove'
        list.append(newTodo)
        newTodo.appendChild(removeBtn)
    }
})

list.addEventListener('click', function(event) {
    if (event.target.tagName === 'BUTTON') {
        event.target.parentElement.remove()
    }

    
})