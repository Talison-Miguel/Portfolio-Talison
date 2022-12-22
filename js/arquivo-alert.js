let btnExit = document.querySelector(".btn-exit")
let bgalert = document.querySelector("#bgAlert")
let alert   = document.querySelector('#alert') 



function fechafeedbackMessage () {
    bgalert.style.display = "none"
    alert.style.display = "none"
}
btnExit.addEventListener('click', fechafeedbackMessage)


function fechafeedbackMessageBg () {
    bgalert.style.display = "none"
    alert.style.display = "none"
}
bgalert.addEventListener('click', fechafeedbackMessage)

function escMessage (event) {
    const tecla = event.keyCode
    if (tecla !== 27) return
    bgalert.style.display = 'none'
    alert.style.display = "none"
}
document.addEventListener('keyup', escMessage)