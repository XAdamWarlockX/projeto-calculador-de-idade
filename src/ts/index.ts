import { inputDia } from "./utils/math/calcularDia.js"
import { inputMes } from "./utils/math/calcularMes.js"
import { inputAno } from "./utils/math/calcularAno.js"
import { validarCampos } from "./validarCampos.js"
import { renderDia } from "./utils/render/renderDia.js"
import { renderMes } from "./utils/render/renderMes.js"
import { renderAno } from "./utils/render/renderAno.js"

const inputs = document.querySelectorAll(".input") as NodeListOf<HTMLInputElement>
const btn = document.getElementById("botao") as HTMLButtonElement

// Botão que renderiza os calculos
btn.addEventListener('click', (): void => {
    renderizarInfos()
})

// Renderizando os calculos com o Enter
inputs.forEach(input => {
    input.addEventListener('keydown', (event:KeyboardEvent): void => {
        if (event.key === 'Enter') {
            input.blur()
            renderizarInfos()
        }
    })
})

// Limitando a quantidade de números digitados dos inputs
const inputsDiaMes: HTMLInputElement[] = [inputDia, inputMes]

inputsDiaMes.forEach(inputs => {
    inputs.addEventListener("input", (): void => {
        if (inputs.value.length > 2) {
            inputs.value = inputs.value.slice(0, 2)
        }
    })
})

inputAno.addEventListener("input", (): void => {
    if (inputAno.value.length > 4) {
        inputAno.value = inputAno.value.slice(0, 4)
    }
})

const renderizarInfos = (): void => {
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