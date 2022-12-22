//Animaçao do scroll do mouse para aparecer o fundo preto
const menuClass = document.getElementsByClassName('scroll')
const menu = document.getElementsByClassName('container-menu')

scrollTo(0, 0)
export function animationBackgroundMenu() {
    if(pageYOffset > 110 && !menuClass[0]) {
        menu[0].classList.add('scroll')
    } else if(pageYOffset < 110 && menuClass[0]) {
        menu[0].classList.remove('scroll')
    }
}
window.addEventListener('scroll', animationBackgroundMenu)