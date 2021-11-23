import {processarNovoItem} from './componentes/criarTarefa.js'
import { renderizarTarefa } from './componentes/renderizarTarefa.js'

const novaTarefa = document.querySelector ('[data-form-button]')

novaTarefa.addEventListener ('click', processarNovoItem)

renderizarTarefa()