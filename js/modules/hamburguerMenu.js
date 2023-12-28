let menuHamburguer   = document.querySelector('#checkbox-menu');
let menuList = document.querySelector('.header-top-navigation')
let menuListlinks = [...document.querySelectorAll('.header-top-navigation li a')]
const links = [...menuList.querySelectorAll('li')]
let timerId;

function openHamburgerMenu() {
    if(menuHamburguer.checked === true) {

        menuList.classList.add('menuHamburguer')
        clearTimeout(timerId);
        timerId = setTimeout(() => menuList.style.transform = 'translateY(0)' ,40)
        links.map(link => setTimeout(() => link.style.opacity = 1, 120))
    } else if(menuHamburguer.checked === false) {

        menuList.style.transform = 'translateY(-140%)'  
        clearTimeout(timerId);
        timerId = setTimeout(() => menuList.classList.remove('menuHamburguer'), 500)
        links.map(link => link.style.opacity = 0) 
    }
} ;


function handleResize() {
    if(window.innerWidth >= 1090) {

        setTimeout(() => menuList.style.transform = 'translateY(0)' , 20)
        links.map(link => link.style.opacity = 1)  
        menuList.classList.remove('menuHamburguer')
        menuHamburguer.checked = false
    } 

    if(window.innerWidth < 1090) menuList.style.transform = 'translateY(-140%)'
}
handleResize();

function closeHamburgerMenu() {
    if (window.innerWidth < 1090) {
        menuList.style.transform = 'translateY(-140%)'
        setTimeout(() => menuList.classList.remove('menuHamburguer'), 500)
        links.map(link => link.style.opacity = 0) 
        menuHamburguer.checked = false
    }
}

export {openHamburgerMenu, menuHamburguer, handleResize, closeHamburgerMenu, menuListlinks}