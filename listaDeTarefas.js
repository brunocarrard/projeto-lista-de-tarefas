const criaNovaTarefa = (evento) => {
    evento.preventDefault
    const inputBruto = document.querySelector ('[data-form-input]')
    const input = inputBruto.value
    console.log(input)
    inputBruto.value = ""
}

const novaTarefa = document.querySelector ('[data-form-button]')

novaTarefa.addEventListener ('click', criaNovaTarefa)