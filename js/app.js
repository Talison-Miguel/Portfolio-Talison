'use strict'

import { openHamburgerMenu, menuHamburguer, handleResize, closeHamburgerMenu, menuListlinks } from "./modules/hamburguerMenu.js"
import { typeWriter, titulo } from "./modules/typeWriter.js";
import { animationBackgroundMenu } from "./modules/animationBackgroundMenu.js";
import { animationOfSkills } from "./modules/animationOfSkills.js";
import { activeLink } from "./modules/activeLink.js";
import { backgroundParalax } from "./modules/backgroundParalax.js";
import { getData } from "./modules/fetchSkills.js";



AOS.init({duration: 1000});

//Menu Hamburguer
menuHamburguer.addEventListener('change', openHamburgerMenu);
window.addEventListener('resize', handleResize);
menuListlinks.map(link => {
    link.addEventListener('click', closeHamburgerMenu);
})


//Efeito maquina de escrever
typeWriter(titulo);

//Animaçao do scroll do mouse para aparecer o fundo preto
window.addEventListener('scroll', animationBackgroundMenu)

//Animação das habilidades sumirem quando rolar tela 
window.addEventListener('scroll', animationOfSkills)

//Link ativo do menu
window.addEventListener('scroll', activeLink)
activeLink()

//Background paralax
window.addEventListener('scroll', backgroundParalax)
backgroundParalax()

//Get dados competencias
getData('../../data/data.json')