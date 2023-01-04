import { AlunosService } from './Services/Alunos.service.js'
import { AlunosView } from './Views/Alunos.view.js'
import { AlunosControler } from './Controllers/Alunos.controller.js'
import { MateriasService } from './Services/materias.service.js'

const alunosService = new AlunosService()

const alunosView = new AlunosView(document.querySelector('[data-table-alunos]'), new MateriasService().materias)

const alunosControler = new AlunosControler(alunosService, alunosView)

const formulario = document.querySelector('form')
formulario.addEventListener('submit', function(e) {
    e.preventDefault()
    const nome = document.getElementById('first_name').value

   alunosControler.add({ nome })
})


const inputSeach = document.querySelector('#search_name')
inputSeach.addEventListener('input', function() {
    const name = this.value
    sessionStorage.setItem('search', name)

    if(name.length > 2 || name.length === 0) [
        alunosControler.search(name)
    ]
})

const inputEvent = new Event('input')
const inputEvent_IE = document.createEvent('Event')
inputEvent_IE.initEvent('input', true, true)

if(sessionStorage.getItem('search')) {
    inputSeach.value = sessionStorage.getItem('search')
    // inputSeach.dispatchEvent(inputEvent)
    inputSeach.dispatchEvent(inputEvent_IE)

}