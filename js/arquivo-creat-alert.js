//Add Background
const bg = document.createElement('div')
const idBg = document.createAttribute('id')
const html = document.querySelector('html')
idBg.value = 'bgAlert'
bg.setAttributeNode(idBg)
html.insertBefore(bg, html.firstChild)


//Add o alert
const idAlert = document.createAttribute('id')
idAlert.value = 'alert'
const alerta = document.createElement('div')
alerta.setAttributeNode(idAlert)
html.insertBefore(alerta, html.firstChild)


//Add button
const btn = document.createElement('button')
btn.className = 'btn-exit'


//Add h1
const h1 = document.createElement('h1')
h1.innerText = 'Layout of a Website'
const idH1 = document.createAttribute('id')
idH1.value = 'title'
h1.setAttributeNode(idH1)
alerta.appendChild(h1)

//Add p
const p = document.createElement('p')
p.innerText = 'A non-functional website I made to train my skills.'
alerta.appendChild(p)



//Add icon
const icon = document.createElement('i')
icon.classList.add('fa-solid', 'fa-circle-exclamation', 'fa-7x')
const idIcon = document.createAttribute('id')
idIcon.value = 'icon'
icon.setAttributeNode(idIcon)
alerta.insertBefore(icon, h1)



//Add btnExit
const btnExitIcon = document.createElement('button')
btnExitIcon.classList.add('btn-exit')
const iconExit = document.createElement('i')
iconExit.classList.add('fa-solid', 'fa-x', 'fa-2xl')
btnExitIcon.appendChild(iconExit)
alerta.insertBefore(btnExitIcon, icon)