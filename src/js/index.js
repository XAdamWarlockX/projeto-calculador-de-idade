import { inputDia } from "./utils/math/calcularDia.js"
import { inputMes } from "./utils/math/calcularMes.js"
import { inputAno } from "./utils/math/calcularAno.js"

import { validarCampos } from "./utils/valid/validarCampos.js"

import { renderDia } from "./utils/render/renderDia.js"
import { renderMes } from "./utils/render/renderMes.js"
import { renderAno } from "./utils/render/renderAno.js"

const inputs = document.querySelectorAll(".input")
const btn = document.getElementById("botao")

// Botão que renderiza os calculos
btn.addEventListener('click', () => {
    renderizarInfos()
})

// Renderizando os calculos com o Enter
inputs.forEach(input => {
    input.addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            input.blur()
            renderizarInfos()
        }
    })
})

// Limitando a quantidade de números digitados dos inputs
const inputsDiaMes = [inputDia, inputMes]

inputsDiaMes.forEach(inputs => {
    inputs.addEventListener("input", () => {
        if (inputs.value.length > 2) {
            inputs.value = inputs.value.slice(0, 2)
        }
    })
})

inputAno.addEventListener("input", () => {
    if (inputAno.value.length > 4) {
        inputAno.value = inputAno.value.slice(0, 4)
    }
})

const renderizarInfos = () => {
    // Previnindo campos vazios ou invalidos
    validarCampos()

    if(validarCampos()){
        return
    }

    // Renderizando resultados
    renderAno()
    renderMes()
    renderDia()
}