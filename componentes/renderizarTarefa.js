import {CriarData} from './criarData.js'
import { RemoverDatasRepetidas } from '../service/data.js'

export const renderizarTarefa = () => {
    const lista = document.querySelector ('[data-list]')
    const tarefas = JSON.parse(localStorage.getItem('tarefas')) || []

    lista.innerHTML = ""

    const datasUnicas = RemoverDatasRepetidas(tarefas)
    
    datasUnicas.forEach((tarefa) => {
        lista.appendChild(CriarData(tarefa))
    })
}