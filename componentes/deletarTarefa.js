export const BotaoDeletar = () => {
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