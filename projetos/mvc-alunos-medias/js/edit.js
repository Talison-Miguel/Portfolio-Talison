import { AlunosService } from "./Services/Alunos.service.js"
import { EditAlunoView } from './Views/EditAluno.view.js'
import { EditAlunoCrontroller } from './Controllers/EditAluno.controler.js'
import { MateriasService } from "./Services/materias.service.js"

const alunosService = new AlunosService()

const paramsString = window.location.search
const UrlParams = new URLSearchParams(paramsString)
const id = parseInt(UrlParams.get("id"))

const aluno = alunosService.searchById(id)

document.getElementById('first_name').value = aluno.nome

const editAlunoView = new EditAlunoView(
    document.querySelector('[data-edit-aluno-form]'),
    new MateriasService().materias
)

const editAlunoCrontroller = new EditAlunoCrontroller(aluno, editAlunoView, alunosService)

document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault()
    const nome = document.querySelector('#first_name').value
    editAlunoCrontroller.edit(aluno, nome)

    //vai pra tal url
    window.location.assign('index.html')
})