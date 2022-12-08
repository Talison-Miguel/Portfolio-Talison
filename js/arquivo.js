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

scrollTo(0, 0)
function scrollAnimation() {
    if(pageYOffset > 110 && !menuClass[0]) {
        menu[0].classList.add('scroll')
    } else if(pageYOffset < 110 && menuClass[0]) {
        menu[0].classList.remove('scroll')
    }
}
window.addEventListener('scroll', scrollAnimation)



// front-end e designer sumir quando rolar
const heroClass = document.getElementsByClassName('scroll2') 
const conteudoHero  = document.getElementsByClassName('header-bottom-container-conteudo')

function scrollAnimation2() {
    if(pageYOffset > 110 && !heroClass[0]) {
        conteudoHero[0].classList.add('scroll2')
    } else if(pageYOffset < 110 && heroClass[0]) {
        conteudoHero[0].classList.remove('scroll2')
    }
}
window.addEventListener('scroll', scrollAnimation2)



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



//Link ativo do menu
const menuNav = document.querySelector('.header-top')
const links = menuNav.querySelectorAll('li a')

function destacaMenu() {

    //ta pegando cada seçao, s1,s2,s3
    let positions = [...links].map(link => {
        let href = link.getAttribute('href')
        
        let h2 = document.querySelector(href)

        return h2.getBoundingClientRect().top
    })

    let linkAtivo = pegaUltimoElementoVisto(positions)
    let menuActived = menuNav.querySelector('.actived')
    if(menuActived) {
        menuActived.classList.remove('actived')
    }

    if(linkAtivo) {
        return linkAtivo.classList.add("actived")
    }

    return links[0].classList.add('actived')
}

function pegaUltimoElementoVisto(_positions) {
    let positions = _positions.filter(n => n < innerHeight / 2)

    return links[positions.length - 1]
}

window.addEventListener('scroll', destacaMenu)

destacaMenu()



//Background paralax
const dataParalaxContainer = [...document.querySelectorAll('[data-paralax]')]

function isGettingOut(container) {
    return container.getBoundingClientRect().top <= 0
}

function getNewPosition(c) {
    const v = parseFloat(c.getAttribute("data-p-velocity")) || .5

    return c.getBoundingClientRect().top * v * -1
}

function positionImage() {
    dataParalaxContainer.forEach(c => {
        let originalPositionY = getComputedStyle(c).backgroundPositionY
        let originalPositionX = getComputedStyle(c).backgroundPositionX

        if(isGettingOut(c)) {
            c.style.backgroundPosition = ` ${originalPositionX} ${getNewPosition(c)}px `
        }else {
            c.style.backgroundPosition = ` ${originalPositionX} 0px `
        }
    })
}

window.addEventListener('scroll', positionImage)

positionImage()