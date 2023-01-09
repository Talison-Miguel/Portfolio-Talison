const menuNav = document.querySelector('.header-top')
const links = menuNav.querySelectorAll('li a')

function activeLink() {
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

export {activeLink}
