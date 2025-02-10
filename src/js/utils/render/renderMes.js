import { calcularMes } from "../math/calcularMes.js"

const renderMes = () => {
    const idMes = document.getElementById("mes")
    idMes.innerHTML = calcularMes()
}

export { renderMes }