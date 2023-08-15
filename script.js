//VARIABLES
const menuEmail = document.querySelector('.user-desktop')
const desktopMenu = document.querySelector('.desktop-menu');
const burgerIcon = document.querySelector('.icon-menu')
const mobilMenu = document.querySelector('.menu-mobil')

menuEmail.addEventListener('click', toggleDesktopMenu)
burgerIcon.addEventListener('click', toggleMobilMenu)

function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactivate')
}

function toggleMobilMenu() {
    mobilMenu.classList.toggle('inactivate')
}