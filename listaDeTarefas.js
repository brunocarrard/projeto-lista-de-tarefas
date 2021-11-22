const CriaNovaTarefa = (evento) => {
    evento.preventDefault ()

    const inputBruto = document.querySelector ('[data-form-input]')
    const input = inputBruto.value

    const lista = document.querySelector ('[data-list]')
    const tarefa = document.createElement ('li')
    tarefa.classList.add ('task')

    lista.appendChild(tarefa)

    const conteudo = `<p class="content">${input}</p>`
    tarefa.innerHTML = conteudo

    tarefa.appendChild(BotaoConcluir())

    inputBruto.value = ""
}

const novaTarefa = document.querySelector ('[data-form-button]')

novaTarefa.addEventListener ('click', CriaNovaTarefa)

const BotaoConcluir = () => {
    const botaoConcluir = document.createElement ('button')
    botaoConcluir.classList.add('check-button')
    botaoConcluir.innerText = 'concluir'
    botaoConcluir.addEventListener ('click', ConcluirTarefa)

    return botaoConcluir
}

const ConcluirTarefa = (evento) => {
    evento.preventDefault()

    const botaoConcluir = evento.target
    const concluirTarefa = botaoConcluir.parentElement

    concluirTarefa.classList.toggle('done')
}

