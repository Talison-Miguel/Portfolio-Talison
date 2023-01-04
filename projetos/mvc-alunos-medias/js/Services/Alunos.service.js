import { AlunoModel } from '../Models/Aluno.model.js'

//tem as funçoes que vao tratar dos dados armazenados na array de alunos
export class AlunosService {
    constructor() {
        this.alunos = []
        this.updateListAlunosFromLocalStorage()
    }

    add(aluno) {
        if(!aluno instanceof AlunoModel) {
            throw TypeError('aluno must be a instance of AlunoModel')
        }
        this.alunos.push(aluno)
        this.updateLocalStorage()
    }

    edit(aluno) {
        aluno.generateAvarege()
        this.updateLocalStorage()
    }

    searchById(id) {
        return this.alunos.find(aluno => aluno._id === id)
    }

    search(name) {
        return this.alunos.filter(aluno => aluno.nome.indexOf(name) >= 0)
    }

    updateLocalStorage() {
        //JSON.stringfy __ vai converter o obj para string, pra guar no localStorage
        const alunos = JSON.stringify(this.alunos)
        //guarda no localStorage
        localStorage.setItem('alunos', alunos)
    }

    updateListAlunosFromLocalStorage() {
        const local = localStorage.getItem('alunos')
        if(local) {
            const alunos = JSON.parse(local)
            alunos.forEach( aluno => {
                this.add(new AlunoModel(aluno))
            } )
        }
    }

}