//Copiar Email

const iconCopy = document.querySelector('.copy')
export function copyEmail() {
    const email = document.querySelector('.container-contato-gmail-span')

    navigator.clipboard.writeText(email.textContent);
    
    setTimeout(() => {
        email.classList.add('animaçao')
    }, 100);

    setTimeout(() => {
        email.classList.remove('animaçao')
    }, 600);
}

iconCopy.addEventListener('click', copyEmail )