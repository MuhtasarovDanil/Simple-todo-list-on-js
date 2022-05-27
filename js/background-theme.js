export const changeColorTheme = (evt) => {
  const body = document.querySelector('body');

  const changeThemeButton = evt.target.closest('.btn--change__theme');
  if (!changeThemeButton) return;

  body.classList.contains('light-theme') ?  changeToDarkTheme() : changeToLightTheme();
}

const changeToLightTheme = () => {
  const body = document.querySelector('body');
  const toDoHeader = document.querySelector('.to-do__header');
  const taskContainer = document.querySelector('.task-container');

  deleteAndAddClass(body, 'light-theme', 'dark-theme');
  deleteAndAddClass(toDoHeader, 'light', 'dark');
  deleteAndAddClass(taskContainer, 'light', 'dark');
}

const changeToDarkTheme = () => {
  const body = document.querySelector('body');
  const toDoHeader = document.querySelector('.to-do__header');
  const taskContainer = document.querySelector('.task-container');

  deleteAndAddClass(body, 'dark-theme', 'light-theme');
  deleteAndAddClass(toDoHeader, 'dark', 'light');
  deleteAndAddClass(taskContainer, 'dark', 'light');
}

const deleteAndAddClass = (element, classToAdd, classToDelete) => {
  element.classList.add(classToAdd);
  element.classList.remove(classToDelete);
}



