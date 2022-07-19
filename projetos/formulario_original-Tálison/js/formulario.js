'use strict'

const formulario       = document.querySelector('.formCadastro')
const btn              = document.querySelector('#btn')
const checkbox         = document.querySelector('#chkAceito')
const wrapCheckboxes   = document.querySelector('#wrap-checkboxes')
const txtTitulo        = document.querySelector('#txtTitulo')
const txtDescricao     = document.querySelector('#txtDescricao')
const feedbackMessage  = document.querySelector('#feedbackMessage')
const contarCaracteres = document.querySelector('#contador')
const closeMenssage    = feedbackMessage.getElementsByTagName('button')[0]
btn.disabled           = true


wrapCheckboxes.addEventListener('click', event => {
    const target       = event.target
    const localName    = event.target.localName

    //Se nao for input vai sair fora
    if (localName !== 'input') return

    btn.disabled = (target.checked === true)
        ? false
        : true
    ;
})



//Envia o formulario, validando ele, caso estiver incompleto aparece o feedbackMessage 
//submit, quando enviar as informaçoes pro servidor
//preventDefault() _ cancela o envio do formulario
formulario.addEventListener('submit', event => {
    //impede que o evento occora, no caso o envio do formulario
    event.preventDefault()

    if (txtTitulo.value.length < 1  || txtDescricao.value.length < 1){
        feedbackMessage.style.transform = 'translateY(0)'
    }

    //Fecha feedbackMessage clickando
    function fechafeedbackMessage () {
        feedbackMessage.style.transform = 'translateY(calc(-2rem - 100%))'
        //por criar o evento dentro da funçao, sempre ta criando um evento, ai para isso precisa remover o evento com o removeEventListener()
        closeMenssage.removeEventListener('click', fechafeedbackMessage)
    }

    closeMenssage.addEventListener('click', fechafeedbackMessage)
});



//Fecha feedbackMessage com o esc
function escMessage (event) {
    const tecla = event.keyCode
    if (tecla !== 27) return

    feedbackMessage.style.transform = 'translateY(calc(-2rem - 100%))'
}
document.addEventListener('keyup', escMessage)






//Altera o numero de quantidade de caracteres
//input _é disparado sincronicamente quando o valor de um elemento <input>, <select>, ou <textarea> é alterado
//keyup _ é disparado qnd aperta uma tecla
//o max length, ta vindo definido la do html, que no caso é 255
const contador = document.querySelector('#contador span')
txtDescricao.addEventListener('input', () => {
    contarCaracteres.style.display = 'block'
    const tecla = event.keyCode;
    let numerosCaracteres = txtDescricao.value.length

    if (numerosCaracteres > txtDescricao.maxLength) {
        contador.textContent = numerosCaracteres
    } else {
        if (tecla === 8) {
            console.log('tecla para apagar')
            contador.textContent = txtDescricao.maxLength - numerosCaracteres
        } else {
            contador.textContent = txtDescricao.maxLength - numerosCaracteres
        }
    }
})





// pegar a tecla
// function pegaTecla(){
//     var tecla = event.keyCode;
//     console.log(tecla);
// }
// document.addEventListener('keydown', pegaTecla)




//falta melhorar, tao sempre criando os eventos, toda hora de enviar o formulario