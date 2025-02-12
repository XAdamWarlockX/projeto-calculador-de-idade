import { calcularMes } from "../math/calcularMes.js"

const renderMes = (): void => {
    const idMes = document.getElementById("mes") as HTMLSpanElement
    idMes.innerHTML = `${calcularMes()}`
}

export { renderMes }