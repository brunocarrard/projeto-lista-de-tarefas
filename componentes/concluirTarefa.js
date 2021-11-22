export const BotaoConcluir = () => {
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