let menuHamburguer   = document.querySelector('#checkbox-menu');
function hamburguerMenu() {
    let navegacao = document.querySelector('.header-top-navigation')

    if(menuHamburguer.checked == true) {
        navegacao.classList.add('menuHamburguer')
    } else {
        navegacao.classList.remove('menuHamburguer')
    }
}

export {menuHamburguer, hamburguerMenu}
//Melhoria _ fechar o menu ao clickar em cada link
// let linksDeNavegaçao = document.querySelectorAll('.header-top-navigation li a') 