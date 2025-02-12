import { calcularAno } from "../math/calcularAno.js"

const renderAno = (): void => {
    const idAno = document.getElementById("ano") as HTMLSpanElement
    idAno.innerHTML = `${calcularAno()}`
}

export { renderAno }