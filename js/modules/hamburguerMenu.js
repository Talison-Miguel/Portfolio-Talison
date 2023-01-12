let menuHamburguer   = document.querySelector('#checkbox-menu');
let menuList = document.querySelector('.header-top-navigation')
function openHamburgerMenu() {
    if(menuHamburguer.checked === true) {
        menuList.classList.add('menuHamburguer')
    } else {
        menuList.classList.remove('menuHamburguer')
    }
}

function closeHamburgerMenu() {
    menuList.classList.remove('menuHamburguer')
    menuHamburguer.checked = false
}

export {openHamburgerMenu, closeHamburgerMenu, menuHamburguer, menuList}