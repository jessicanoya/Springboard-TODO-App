// Select elements from DOM
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
        // Set input to an empty string, this clears the input box
        input.value = ''
    }
})

list.addEventListener('click', function(event) {
    // If button is clicked on, remove it
    if (event.target.tagName === 'BUTTON') {
        event.target.parentElement.remove()
    }

    // If element is clicked on, strike through with CSS selector
    if (event.target.tagName === 'LI') {
        event.target.classList.add('strike')
    }
})