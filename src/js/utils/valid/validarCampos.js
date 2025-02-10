import { inputDia, diaNascimento, pegarDiaNascimento } from "../math/calcularDia.js";
import { inputMes, mesNascimento, pegarMesNascimento } from "../math/calcularMes.js";
import { inputAno, anoNascimento, pegarAnoNascimento } from "../math/calcularAno.js";

const inputs = document.querySelectorAll(".input")
const labels = document.querySelectorAll(".label")
const camposInvalidos = document.querySelectorAll(".campo-invalido")
const camposObrigatorios = document.querySelectorAll(".campo-obrigatorio")

// Previnindo campos vazios ou invalidos
const validarCampos = () => {
    pegarDiaNascimento(inputDia.value)
    pegarMesNascimento(inputMes.value)
    pegarAnoNascimento(inputAno.value)

    const valoresNascimento = [diaNascimento, mesNascimento, anoNascimento];

    inputs.forEach((input, index) => {
        if (valoresNascimento[index] === 0 || valoresNascimento[index] < 0) {
            input.classList.remove("cor-borda")
            input.classList.add("cor-borda-erro")
            input.classList.remove("cor-borda:focus")
        } else {
            input.classList.remove("cor-borda-erro")
            input.classList.add("cor-borda")
        }
    })

    labels.forEach((label, index) => {
        if (valoresNascimento[index] === 0 || valoresNascimento[index] < 0) {
            label.classList.remove("cor-label")
            label.classList.add("cor-erro")

        } else {
            label.classList.remove("cor-erro")
            label.classList.add("cor-label")
        }
    })

    camposObrigatorios.forEach((campoObrigatorio, index) => {
        if (valoresNascimento[index] === 0) {
            campoObrigatorio.classList.remove("ocultar")

        } else {
            campoObrigatorio.classList.add("ocultar")
        }
    })

    const diasMesNascimento = new Date(0, mesNascimento, 0).getDate()

    if (diaNascimento > diasMesNascimento || diaNascimento < 0) {
        camposInvalidos[0].classList.remove("ocultar")
        inputs[0].classList.remove("cor-borda")
        inputs[0].classList.add("cor-borda-erro")
        labels[0].classList.remove("cor-label")
        labels[0].classList.add("cor-erro")
    } else if (diaNascimento <= diasMesNascimento && diaNascimento > 0) {
        camposInvalidos[0].classList.add("ocultar")
        inputs[0].classList.remove("cor-borda-erro")
        inputs[0].classList.add("cor-borda")
        labels[0].classList.remove("cor-erro")
        labels[0].classList.add("cor-label")
    }

    if (mesNascimento > 12 || mesNascimento < 0) {
        camposInvalidos[1].classList.remove("ocultar")
        inputs[1].classList.remove("cor-borda")
        inputs[1].classList.add("cor-borda-erro")
        labels[1].classList.remove("cor-label")
        labels[1].classList.add("cor-erro")
    } else if (mesNascimento <= 12 && mesNascimento > 0) {
        camposInvalidos[1].classList.add("ocultar")
        inputs[1].classList.remove("cor-borda-erro")
        inputs[1].classList.add("cor-borda")
        labels[1].classList.remove("cor-erro")
        labels[1].classList.add("cor-label")
    }

    const dataAtual = new Date()
    const anoAtual = dataAtual.getFullYear()

    if (anoNascimento !== 0 && (anoNascimento > anoAtual || anoNascimento < anoAtual - 100)) {
        camposInvalidos[2].classList.remove("ocultar")
    } else {
        camposInvalidos[2].classList.add("ocultar")
    }

    if (anoNascimento > anoAtual || anoNascimento < anoAtual - 100) {
        inputs[2].classList.remove("cor-borda")
        inputs[2].classList.add("cor-borda-erro")
        labels[2].classList.remove("cor-label")
        labels[2].classList.add("cor-erro")
    } else {
        inputs[2].classList.remove("cor-borda-erro")
        inputs[2].classList.add("cor-borda")
        labels[2].classList.remove("cor-erro")
        labels[2].classList.add("cor-label")
    }

    if (diaNascimento > diasMesNascimento || diaNascimento < 0 || mesNascimento > 12 || mesNascimento < 0 || anoNascimento > anoAtual || anoNascimento < anoAtual - 100) {
        return true
    }

    if (diaNascimento === 0 || mesNascimento === 0 || anoNascimento === 0) {
        return true
    }
}

export { validarCampos }