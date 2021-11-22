import {BotaoConcluir} from './componentes/concluirTarefa.js'
import {BotaoDeletar} from './componentes/deletarTarefa.js'

const processarNovoItem = (evento) => {
    evento.preventDefault ()

    const inputBruto = document.querySelector('[data-form-input]')
    const input = inputBruto.value

    const lista = document.querySelector ('[data-list]')
    
    const calendario = document.querySelector('[data-form-date]')
    const dataMoment = moment(calendario.value)
    const dataFormatada = dataMoment.format('DD/MM/YYYY')

    const dados = {
        input,
        dataFormatada
    }

    const criaTarefa = CriaNovaTarefa(dados)
    lista.appendChild(criaTarefa)

    inputBruto.value = ""
}

const CriaNovaTarefa = ({input, dataFormatada}) => {
    const tarefa = document.createElement ('li')
    tarefa.classList.add ('task')

    const conteudo = `<p class="content">${dataFormatada} * ${input}</p>`
    tarefa.innerHTML = conteudo

    tarefa.appendChild(BotaoConcluir())
    tarefa.appendChild(BotaoDeletar())

    return tarefa
}

const novaTarefa = document.querySelector ('[data-form-button]')

novaTarefa.addEventListener ('click', processarNovoItem)