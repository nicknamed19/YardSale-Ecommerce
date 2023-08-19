//VARIABLES
const menuEmail = document.querySelector('.user-desktop')
const desktopMenu = document.querySelector('.desktop-menu');
const burgerIcon = document.querySelector('.icon-menu')
const mobilMenu = document.querySelector('.menu-mobil')
const myOrder = document.querySelector('.my-order')
const myOrderIcon = document.querySelector('.shopping-cart-icon')
const myOrderArrowBack = document.querySelector('.my-order-arrow-back')

menuEmail.addEventListener('click', toggleDesktopMenu)
burgerIcon.addEventListener('click', toggleMobilMenu)
myOrderIcon.addEventListener('click', toggleMyOrder)
myOrderArrowBack.addEventListener('click', toggleMyOrder)

function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive')

    if(!myOrder.classList.contains('inactive')){
        myOrder.classList.add('inactive')
    }
}

function toggleMobilMenu() {
    mobilMenu.classList.toggle('inactive')

    if(!myOrder.classList.contains('inactive')){
        myOrder.classList.add('inactive')
    }
}

function toggleMyOrder(){
    myOrder.classList.toggle('inactive')

    if (!mobilMenu.classList.contains('inactive')) {
        mobilMenu.classList.add('inactive')
    }
    if (!desktopMenu.classList.contains('inactive')) {
        desktopMenu.classList.add('inactive')
    }
}