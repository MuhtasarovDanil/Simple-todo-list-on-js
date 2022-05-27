export const createTaskElement = () => {
	const taskContainer = document.querySelector('.task-container');
	const toDoField = document.querySelector('.to-do__input');
	if (!toDoField.value) return;

	const createTaskHTML = document.createRange().createContextualFragment(
		` 
		<li class="task-element">
        <p class="task__content">${toDoField.value}</p>
        <button class="btn btn--delete">Delete</button>
      </li> 
		`);

	taskContainer.appendChild(createTaskHTML);
	toDoField.value = "";
}

/* Clear task */
export const clearAll = () => {
	const taskContainer = document.querySelector('.task-container');
	taskContainer.innerHTML = "";
};

/* Delete task */
export const deleteButtonClickHandler = (evt) => {
	const deleteButton = evt.target.closest('.btn--delete');
	const taskElement = evt.target.closest('.task-element');

	if (!deleteButton || !taskElement) return;

	taskElement.remove();
};
