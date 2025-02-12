import { calcularDia } from "../math/calcularDia.js"

const renderDia = (): void => {
    const idDia = document.getElementById("dia") as HTMLSpanElement
    // const resultado = String(calcularMes())
    // idMes.innerHTML = calcularMes().toString()
    idDia.innerHTML = `${calcularDia()}`
}

export { renderDia }