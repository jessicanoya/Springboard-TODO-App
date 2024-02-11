// Select elements from DOM
const form = document.querySelector('#todo-form')
const input = document.querySelector('#user-input')
const list = document.querySelector('#list')

// Submit event fires when a <form> is submitted
form.addEventListener('submit', function(event) {
    // In a form element, when the user submits the page automatically refreshes. This prevents that from happening
    event.preventDefault()

    // Create element list
    const newTodo = document.createElement('li')
    // Create element button
    const removeBtn = document.createElement('button')

    // If value is not an empty string, do something
    if (input.value !== '') {
        // .value retrieves the current value of an input field in a form
        // innerText sets the newTodo value
        newTodo.innerText = input.value
        // Set innerText of button element to 'Remove'
        removeBtn.innerText = 'Remove'
        // Append list item to unordered list
        list.append(newTodo)
        // Append the element as the last child of an element, in other words, to the li element
        newTodo.appendChild(removeBtn)
        // Set input to an empty string, this clears the input box
        input.value = ''
    }
})

// Add event listener to the button
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