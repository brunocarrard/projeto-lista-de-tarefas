import {BotaoConcluir} from './concluirTarefa.js'
import {BotaoDeletar} from './deletarTarefa.js'
import { renderizarTarefa } from './renderizarTarefa.js'

export const processarNovoItem = (evento) => {
    evento.preventDefault ()

    const tarefas = JSON.parse(localStorage.getItem('tarefas')) || []
    
    const inputBruto = document.querySelector('[data-form-input]')
    const input = inputBruto.value

    const calendario = document.querySelector('[data-form-date]')
    const dataMoment = moment(calendario.value)
    const dataFormatada = dataMoment.format('DD/MM/YYYY')

    const dados = {
        input,
        dataFormatada
    }

    const tarefasAtualizadas = [... tarefas, dados]
    localStorage.setItem('tarefas', JSON.stringify(tarefasAtualizadas))

    inputBruto.value = ""

    renderizarTarefa()
}

export const Tarefa = ({input, dataFormatada}) => {
    const tarefa = document.createElement ('li')
    tarefa.classList.add ('task')

    const conteudo = `<p class="content">${dataFormatada} * ${input}</p>`
    tarefa.innerHTML = conteudo

    tarefa.appendChild(BotaoConcluir())
    tarefa.appendChild(BotaoDeletar())

    return tarefa
}
