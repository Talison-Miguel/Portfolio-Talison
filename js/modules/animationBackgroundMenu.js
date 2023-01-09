const menuClass = document.getElementsByClassName('scroll')
const menu = document.getElementsByClassName('container-menu')

scrollTo(0, 0)
function animationBackgroundMenu() {
    if(pageYOffset > 110 && !menuClass[0]) {
        menu[0].classList.add('scroll')
    } else if(pageYOffset < 110 && menuClass[0]) {
        menu[0].classList.remove('scroll')
    }
}

export {animationBackgroundMenu}