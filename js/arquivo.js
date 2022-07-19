'use strict'

//Menu Hamburguer
let menuHamburguer = document.querySelector('#checkbox-menu');
let navegacao      = document.querySelector('.header-top-navigation')

function checarMenuHamburgue() {
    if(menuHamburguer.checked == true) {
        navegacao.classList.add('menuHamburguer')
    } else {
        navegacao.classList.remove('menuHamburguer')
    }
}

menuHamburguer.addEventListener('change', checarMenuHamburgue);


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


//Animaçao do scroll do mouse pra aparecer o fundo preto
// const menu = document.querySelector('.container-menu')

// menu.addEventListener('scroll', function() {
//     if(menu.scrollTop >= '100px'){
//         menu.classList.add('scroll');
//     }
//     else{
//         menu.classList.add('scroll');  
//     }
// })

// console.log(menu.scrollTop >= '100px')


// const TypeWriter = require('t-writer.js');
// import Typewriter from 't-writer.js'

// const target = document.querySelector('.target-maquinaJs');
// const writer = new TypeWriter(target, {
// 	loop: true,
// 	typeColor: 'blue'
// });

// writer
// 	.type('Muito obrigado por conferir este código!')
// 	.rest(500)
// 	.start();

// console.log(TypeWriter)




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