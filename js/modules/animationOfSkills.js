const heroClass = document.getElementsByClassName('scroll2') 
const conteudoHero  = document.getElementsByClassName('header-bottom-container-conteudo')

function animationOfSkills() {
    if(pageYOffset > 110 && !heroClass[0]) {
        conteudoHero[0].classList.add('scroll2')
    } else if(pageYOffset < 110 && heroClass[0]) {
        conteudoHero[0].classList.remove('scroll2')
    }
}

export { animationOfSkills}