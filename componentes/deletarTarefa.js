export const BotaoDeletar = (atualiza, id) => {
    const botaoDeletar = document.createElement ('button')
    botaoDeletar.innerText = 'deletar'
    botaoDeletar.addEventListener ('click', ()=> DeletarTarefa(atualiza, id))

    return botaoDeletar
}

const DeletarTarefa = (atualiza, id) => {
    const tarefas = JSON.parse(localStorage.getItem('tarefas'))

    const index = id
    tarefas.splice(index, 1)

    localStorage.setItem('tarefas', JSON.stringify(tarefas))

    atualiza()
}