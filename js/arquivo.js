'use strict'

//Menu Hamburguer
let menuHamburguer   = document.querySelector('#checkbox-menu');
let navegacao        = document.querySelector('.header-top-navigation')
let linksDeNavegaçao = document.querySelectorAll('.header-top-navigation li a') 

function checarMenuHamburgue() {
    if(menuHamburguer.checked == true) {
        navegacao.classList.add('menuHamburguer')
    } else {
        navegacao.classList.remove('menuHamburguer')
    }
}

menuHamburguer.addEventListener('change', checarMenuHamburgue);
//Melhoria _ fechar o menu ao clickar em cada link


//Copiar Email
const iconCopy = document.querySelector('.copy')

iconCopy.addEventListener('click', () => {
    const email = document.querySelector('.container-contato-gmail-span')

    navigator.clipboard.writeText(email.textContent);
    
    setTimeout(() => {
        email.classList.add('animaçao')
    }, 100);

    setTimeout(() => {
        email.classList.remove('animaçao')
    }, 600);
})


//Animação Rolagem da pagina, com os itens
AOS.init({
    duration: 1000,
    // once: true
});


//Animaçao do scroll do mouse para aparecer o fundo preto
const menuClass = document.getElementsByClassName('scroll')
const menu = document.getElementsByClassName('container-menu')
const headerTop = document.getElementsByClassName('header-top')

scrollTo(0, 0)
function scrollAnimation() {
    if(pageYOffset > 110 && !menuClass[0]) {
        menu[0].classList.add('scroll')
    } else if(pageYOffset < 110 && menuClass[0]) {
        menu[0].classList.remove('scroll')
    }
}

console.log(menu)
window.addEventListener('scroll', scrollAnimation)



//Efeito maquina de escrever
const titulo = document.querySelector('.header-bottom-parag');

function typeWriter(elemento) {
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach((letra, i) => {
      setTimeout(() => elemento.innerHTML += letra, 180 * i);
    });
}

typeWriter(titulo);