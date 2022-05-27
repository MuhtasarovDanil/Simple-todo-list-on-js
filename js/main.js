import { createTaskElement, clearAll, deleteButtonClickHandler } from './todo-actions.js';
import { changeColorTheme } from './background-theme.js';

const init = () => {
	const createButton = document.querySelector('.btn--create');
	const clearButton = document.querySelector('.btn--clear');
	const taskContainer = document.querySelector('.task-container');
	const formContainer = document.querySelector('.form-container');

	createButton.addEventListener("click", createTaskElement);
	clearButton.addEventListener("click", clearAll);
	taskContainer.addEventListener("click", deleteButtonClickHandler);
	formContainer.addEventListener("click", changeColorTheme);
};

init();
