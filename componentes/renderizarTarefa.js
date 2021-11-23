import {Tarefa} from './criarTarefa.js'

export const renderizarTarefa = () => {
    const lista = document.querySelector ('[data-list]')
    const tarefas = JSON.parse(localStorage.getItem('tarefas')) || []

    lista.innerHTML = ""

    tarefas.forEach((tarefa) => {
        lista.appendChild(Tarefa(tarefa))
    })
}