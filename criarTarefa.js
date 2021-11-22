import {BotaoConcluir} from './componentes/concluirTarefa.js'
import {BotaoDeletar} from './componentes/deletarTarefa.js'

const CriaNovaTarefa = (evento) => {
    evento.preventDefault ()

    const inputBruto = document.querySelector('[data-form-input]')
    const input = inputBruto.value

    const calendario = document.querySelector('[data-form-date]')
    const dataMoment = moment(calendario.value)
    const dataFormatada = dataMoment.format('DD/MM/YYYY')

    const lista = document.querySelector ('[data-list]')
    const tarefa = document.createElement ('li')
    tarefa.classList.add ('task')

    lista.appendChild(tarefa)

    const conteudo = `<p class="content">${dataFormatada} * ${input}</p>`
    tarefa.innerHTML = conteudo

    tarefa.appendChild(BotaoConcluir())
    tarefa.appendChild(BotaoDeletar())

    inputBruto.value = ""
}

const novaTarefa = document.querySelector ('[data-form-button]')

novaTarefa.addEventListener ('click', CriaNovaTarefa)