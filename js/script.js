let taskContainer = document.querySelector('.task-container');
let toDoField = document.querySelector('.to-do__input');
let createButton = document.querySelector('.btn--create');
let clearButton = document.querySelector('.btn--clear');

/* Add task */
function createTaskElement() {
    if (!toDoField.value) return;

    const createTaskHTML = document.createRange().createContextualFragment(
        ` <li class="task-element">
            <p class="task__content">${toDoField.value}</p>
            <button class="btn btn--delete">Delete</button>
          </li> `);

    taskContainer.appendChild(createTaskHTML);
    toDoField.value = "";
}

/* Clear all */
const clearAll = () => {
    taskContainer.innerHTML = "";
};

/* Delete task */
const deleteButtonClickHandler = (evt) => {
    let deleteButton = evt.target.closest('.btn--delete');
    let taskElement = evt.target.closest('.task-element');

    if (!deleteButton) return;

    taskElement.remove();
};

/* Click handlers */
createButton.addEventListener('click', createTaskElement);
clearButton.addEventListener('click', clearAll);
taskContainer.addEventListener('click', deleteButtonClickHandler);
