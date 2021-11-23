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

    const concluida = false

    const dados = {
        input,
        dataFormatada,
        concluida
    }

    const tarefasAtualizadas = [... tarefas, dados]
    localStorage.setItem('tarefas', JSON.stringify(tarefasAtualizadas))

    inputBruto.value = ""

    renderizarTarefa()
}

export const Tarefa = ({input, dataFormatada, concluida}, id) => {
    const tarefa = document.createElement ('li')
    

    const conteudo = `<p class="content">${dataFormatada} * ${input}</p>`
    
    if (concluida){
        tarefa.classList.add ('done')
    }tarefa.classList.add ('task')
    
    tarefa.innerHTML = conteudo

    tarefa.appendChild(BotaoConcluir(renderizarTarefa, id))
    tarefa.appendChild(BotaoDeletar())

    return tarefa
}
