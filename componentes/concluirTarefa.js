const ConcluirTarefa = (atualiza, id) => {
    const tarefas = JSON.parse(localStorage.getItem('tarefas'))

    tarefas[id].concluida = !tarefas[id].concluida
    localStorage.setItem('tarefas', JSON.stringify(tarefas))

    atualiza()
}

export const BotaoConcluir = (atualiza, id) => {
    const botaoConcluir = document.createElement ('button')
    botaoConcluir.classList.add('check-button')
    botaoConcluir.innerText = 'concluir'
    botaoConcluir.addEventListener ('click', ()=> ConcluirTarefa(atualiza, id))

    return botaoConcluir
}