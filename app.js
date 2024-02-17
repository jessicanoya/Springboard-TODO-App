// 1. Store items in local storage to an array
// 2. Get items from local storage and remove from array
// 3. Retrieve elements from local storage and render list elements
// TODO: Make it less redundant 

// Select elements from DOM
const form = document.querySelector('#todo-form')
const input = document.querySelector('#user-input')
const list = document.querySelector('#list')

document.addEventListener('DOMContentLoaded', function() {
    let existingTodos = JSON.parse(localStorage.getItem("todos")) || [];
    for (let item of existingTodos){
        addMarkupToDOM(item)
    }
})

// Submit event fires when a <form> is submitted
form.addEventListener('submit', function(event) {
    // In a form element, when the user submits the page automatically refreshes. This prevents that from happening
    event.preventDefault()

    // If value is not an empty string, do something
    if (input.value !== '') {

        let existingTodos = JSON.parse(localStorage.getItem("todos")) || [];

        existingTodos.push(input.value);
        localStorage.setItem("todos", JSON.stringify(existingTodos));
        addMarkupToDOM(input.value)
       
        input.value = ''
    }
})

// Add event listener to the button
list.addEventListener('click', function(event) {
    // If button is clicked on, remove it
    if (event.target.tagName === 'BUTTON') {
        let existingTodos = JSON.parse(localStorage.getItem("todos")) || [];

        // Since we added a span to differentiate between the todo and the button,
        // we can use the previousSibling property to get the todo text without 'Remove'
        const todoText = event.target.previousSibling.innerText
        const updatedTodos = removeItemFromArray(existingTodos, todoText)
        localStorage.setItem("todos", JSON.stringify(updatedTodos));
        event.target.parentElement.remove()
    }

    // If element is clicked on, strike through with CSS selector
    if (event.target.tagName === 'LI') {
        event.target.classList.add('strike')
    }
})

function removeItemFromArray(arr, todo) {
    let result = []

    for (let item of arr) {
        if (item !== todo){
            result.push(item)
        }
    }
    return result
}

function addMarkupToDOM(input){
    const newTodo = document.createElement('li')
    // Create element button
    const removeBtn = document.createElement('button')

    // Creating a span element to differentiate between the todo itself and the button
    const span = document.createElement('span')
    // .value retrieves the current value of an input field in a form

    // innerText sets the newTodo value
    span.innerText = input
    // Set innerText of button element to 'Remove'
    removeBtn.innerText = 'Remove'
    // Append list item to unordered list
    list.append(newTodo)
    // Append the element as the last child of an element, in other words, to the li element
    newTodo.append(span)
    newTodo.append(removeBtn)
}