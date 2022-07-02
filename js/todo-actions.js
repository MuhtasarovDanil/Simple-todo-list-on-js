export const createTaskElement = () => {
	const toDoField = document.querySelector('.todo__input')

	if (!toDoField) {
		return
	}

	const taskContainer = document.querySelector('.task-container')
	const createHtmlTask = document.createRange().createContextualFragment(
		` 
		<li class="task-item">
			<p class="task__content">${toDoField.value}</p>
			<button class="btn btn--delete">Delete</button>
		 </li> 
		`)

	taskContainer.appendChild(createHtmlTask)
	toDoField.value = ''
}

export const clearAll = () => {
	const taskContainer = document.querySelector('.task-container')
	taskContainer.innerHTML = ''
}

export const deleteButtonClickHandler = (evt) => {
	const deleteButton = evt.target.closest('.btn--delete')

	if (deleteButton) {
		const taskItem = evt.target.closest('.task-item')
		taskItem.remove()
	}
}