import {processarNovoItem} from './componentes/criarTarefa.js'

const novaTarefa = document.querySelector ('[data-form-button]')

novaTarefa.addEventListener ('click', processarNovoItem)