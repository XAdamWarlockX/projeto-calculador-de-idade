import { calcularAno } from "../utils/calcularAno.js"

const renderAno = () => {
    const idAno = document.getElementById("ano")
    idAno.innerHTML = calcularAno()
}

export { renderAno }