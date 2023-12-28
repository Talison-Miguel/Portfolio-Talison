'use strict'

import { openHamburgerMenu, menuHamburguer, handleResize, closeHamburgerMenu, menuList } from "./modules/hamburguerMenu.js"
import { copyEmail, iconCopy } from "./modules/copyEmail.js"
import { typeWriter, titulo } from "./modules/typeWriter.js";
import { animationBackgroundMenu } from "./modules/animationBackgroundMenu.js";
import { animationOfSkills } from "./modules/animationOfSkills.js";
import { activeLink } from "./modules/activeLink.js";
import { backgroundParalax } from "./modules/backgroundParalax.js";


AOS.init({duration: 1000,});

//Menu Hamburguer
menuHamburguer.addEventListener('change', openHamburgerMenu);
window.addEventListener('resize', handleResize);
menuList.addEventListener('click', closeHamburgerMenu);



//Copiar Email
iconCopy.addEventListener('click', copyEmail )

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