import { inputDia, diaNascimento, pegarDiaNascimento } from "./calcularDia.js"

const inputMes = document.getElementById("input-mes") as HTMLInputElement

// Difinindo datas que serão usadas
const dataAtual: Date = new Date()
const [diaAtual, mesAtual]: number[] = [
    dataAtual.getDate(),
    dataAtual.getMonth() + 1
]

// Função que atualiza o valor do campo
let mesNascimento: number = 0
const pegarMesNascimento = (valor: number | string): void => {
    mesNascimento = Number(valor)
}

// Calculando meses vividos
const calcularMes = (): number => {
    const mesNascimentoAteDez: number = 12 - mesNascimento

    pegarDiaNascimento(inputDia.value)
    pegarMesNascimento(inputMes.value)

    if (mesAtual === mesNascimento && diaNascimento <= diaAtual) {
        return 0
    } else if (mesAtual === mesNascimento && diaNascimento > diaAtual) {
        return mesNascimentoAteDez + mesAtual - 1
    } else if (diaNascimento <= diaAtual) {
        return mesNascimentoAteDez + 1
    } else{
        return mesNascimentoAteDez
    }
}

export { inputMes, mesNascimento, pegarMesNascimento, calcularMes }