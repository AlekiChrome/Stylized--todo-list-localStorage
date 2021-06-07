const unordered = document.querySelector(".todo-list");
const todoInput = document.querySelector(".todo-input");
const button = document.querySelector(".todo-button");
const counter = document.querySelector(".counter b");


const allItems = unordered.children;





button.addEventListener("click", (e) => {
    e.preventDefault();

    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo-div");

    const listItem = document.createElement('li');
    listItem.classList.add("list-item");
    listItem.innerText = todoInput.value;
    unordered.appendChild(listItem);

    todoInput.value = "";

    counter.innerText = `${allItems.length}`;

})
