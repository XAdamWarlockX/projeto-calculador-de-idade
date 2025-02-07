import { calcularMes } from "../utils/calcularMes.js"

const renderMes = () => {
    const idMes = document.getElementById("mes")
    idMes.innerHTML = calcularMes()
}

export { renderMes }