const titulo = document.querySelector('.header-bottom-parag');
function typeWriter(elemento) {
    const textoArray = elemento.innerHTML.split('');

    elemento.innerHTML = '';
    textoArray.forEach((letra, i) => {
      setTimeout(() => elemento.innerHTML += letra, 180 * i);
    });
}

export {typeWriter, titulo}