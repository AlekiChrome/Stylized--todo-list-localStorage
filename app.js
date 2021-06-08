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
    todoDiv.appendChild(listItem);

    todoInput.value = "";

    const completedBtn = document.createElement("button");
    completedBtn.innerHTML = '<i class="fas fa-check"></i>'
    completedBtn.classList.add("completed-btn");
    todoDiv.appendChild(completedBtn);

    const deleteBtn = document.createElement("delete-btn");
    deleteBtn.innerHTML = '<i class="fas fa-trash"></i>'
    deleteBtn.classList.add("delete-btn");
    todoDiv.appendChild(deleteBtn);

    unordered.appendChild(todoDiv);

    unordered.addEventListener("click", (e) => {

        const item = e.target;

        if (item.classList[0] === "delete-btn") {
            const todo = item.parentElement;
            todo.classList.add("fall");
            todo.addEventListener("transitionend", () => {
                todo.remove();
            })
        }

        if (item.classList[0] === "completed-btn") {
            const todo = item.parentElement;
            todo.classList.toggle("completed");
        }
    });

    counter.innerText = `${allItems.length}`;


})
