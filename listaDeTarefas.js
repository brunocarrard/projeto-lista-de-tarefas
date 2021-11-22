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
    tarefa.appendChild(BotaoDeletar())

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

const BotaoDeletar = () => {
    const botaoDeletar = document.createElement ('button')
    botaoDeletar.innerText = 'deletar'
    botaoDeletar.addEventListener ('click', DeletarTarefa)

    return botaoDeletar
}

const DeletarTarefa = (evento) => {
    evento.preventDefault()

    const botaoDeletar = evento.target
    const deletarTarefa = botaoDeletar.parentElement

    deletarTarefa.remove()
}

