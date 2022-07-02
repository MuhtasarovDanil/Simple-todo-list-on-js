export const changeColorTheme = (evt) => {
  const changeThemeButton = evt.target.closest('.btn--change__theme')

  if (!changeThemeButton) {
    return
  }

  const body = document.querySelector('body')
  const header = document.querySelector('.header')
  const taskContainer = document.querySelector('.task-container')

  const themes = ['light-theme', 'dark-theme']
  const changeThemeElements = [body, header, taskContainer]

  const currentIndexOfTheme = themes.indexOf(body.className)
  const isLastThemeIndex = currentIndexOfTheme === themes.length - 1

  changeThemeElements.forEach(element => {
    element.classList.remove(themes[currentIndexOfTheme])
    element.classList.add(isLastThemeIndex ? themes[0] : themes[currentIndexOfTheme + 1])
  })
}