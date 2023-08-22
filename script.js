//VARIABLES
const menuEmail = document.querySelector('.user-desktop');
const desktopMenu = document.querySelector('.desktop-menu');
const burgerIcon = document.querySelector('.icon-menu');
const mobilMenu = document.querySelector('.menu-mobil');
const myOrder = document.querySelector('.my-order');
const myOrderIcon = document.querySelector('.shopping-cart-icon');
const myOrderArrowBack = document.querySelector('.my-order-arrow-back');
const cardsContainer = document.querySelector('.cards-container');
const productDetail = document.querySelector('.product-detail');
const productDetailClose = document.querySelector('.product-detail-close');

menuEmail.addEventListener('click', toggleDesktopMenu);
burgerIcon.addEventListener('click', toggleMobilMenu);
myOrderIcon.addEventListener('click', toggleMyOrder);
myOrderArrowBack.addEventListener('click', toggleMyOrder);
productDetailClose.addEventListener('click', toggleProductDetail);

function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive');

    if(!myOrder.classList.contains('inactive')){
        myOrder.classList.add('inactive');
    }
    if(!productDetail.classList.contains('inactive')){
        productDetail.classList.add('inactive');
    }
}

function toggleMobilMenu() {
    mobilMenu.classList.toggle('inactive');

    if(!myOrder.classList.contains('inactive')){
        myOrder.classList.add('inactive');
    }
    if(!productDetail.classList.contains('inactive')){
        productDetail.classList.add('inactive');
    }
}

function toggleMyOrder(){
    myOrder.classList.toggle('inactive');

    if (!mobilMenu.classList.contains('inactive')) {
        mobilMenu.classList.add('inactive');
    }
    if (!desktopMenu.classList.contains('inactive')) {
        desktopMenu.classList.add('inactive');
    }
    if(!productDetail.classList.contains('inactive')){
        productDetail.classList.add('inactive');
    }
}

function toggleProductDetail(){
    
    productDetail.classList.toggle('inactive');

    if (!desktopMenu.classList.contains('inactive')) {
        desktopMenu.classList.add('inactive');
    }
    if(!myOrder.classList.contains('inactive')){
        myOrder.classList.add('inactive');
    }
}

let productList = [];
productList.push({
    name: 'Bike',
    price:120,
    image: 'https://images.pexels.com/photos/10904933/pexels-photo-10904933.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    icon: './icons/bt_add_to_cart.svg'
})
productList.push({
    name: 'Computer',
    price:720,
    image: 'https://images.pexels.com/photos/2148216/pexels-photo-2148216.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    icon: './icons/bt_add_to_cart.svg'
})
productList.push({
    name: 'Phone',
    price:420,
    image: 'https://images.pexels.com/photos/4526469/pexels-photo-4526469.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    icon: './icons/bt_add_to_cart.svg'
})
productList.push({
    name: 'Tv',
    price: 820,
    image: 'https://images.pexels.com/photos/5490302/pexels-photo-5490302.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    icon: './icons/bt_add_to_cart.svg'
})

function renderProduct(arr) {
    for(product of arr){
        
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        const containtProductImg = document.createElement('picture');
        containtProductImg.classList.add('product-img');

        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('click', toggleProductDetail);

        const productInfo = document.createElement('section');
        productInfo.classList.add('product-info');

        const productInfoDiv = document.createElement('div');

        const productInfoPrice = document.createElement('span');
        productInfoPrice.textContent = `$${product.price},00`;

        const productInfoName = document.createElement('span');
        productInfoName.textContent = product.name;

        const cartAdd = document.createElement('figure');
        cartAdd.classList.add('cart-add');

        const cartAddImg = document.createElement('img');
        cartAddImg.setAttribute('src', product.icon);

        cardsContainer.appendChild(productCard);
        productCard.append(containtProductImg, productInfo)
        containtProductImg.appendChild(productImg);
        productInfo.append(productInfoDiv, cartAdd);
        productInfoDiv.append(productInfoPrice, productInfoName);
        cartAdd.appendChild(cartAddImg);

    }
}

renderProduct(productList);