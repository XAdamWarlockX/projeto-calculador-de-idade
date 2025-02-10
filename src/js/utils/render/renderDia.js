import { calcularDia } from "../math/calcularDia.js"

const renderDia = () => {
    const idDia = document.getElementById("dia")
    idDia.innerHTML = calcularDia()
}

export { renderDia }