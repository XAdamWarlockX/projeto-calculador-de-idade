import { inputDia, diaNascimento, pegarDiaNascimento } from "./calcularDia.js"
import { inputMes, mesNascimento, pegarMesNascimento } from "./calcularMes.js"

const inputAno = document.getElementById("input-ano")

// Difinindo datas que serão usadas
const dataAtual = new Date()
const [diaAtual, mesAtual, anoAtual] = [
    dataAtual.getDate(),
    dataAtual.getMonth() + 1,
    dataAtual.getFullYear()
]

// Função que atualiza o valor do campo
let anoNascimento = 0
const pegarAnoNascimento = (valor) => {
    anoNascimento = Number(valor)
}

// Calculando anos vividos
const calcularAno = () => {
    const diferencaDeAnos = anoAtual - anoNascimento

    pegarDiaNascimento(inputDia.value)
    pegarMesNascimento(inputMes.value)
    pegarAnoNascimento(inputAno.value)

    if (mesAtual === mesNascimento & diaNascimento <= diaAtual) {
        return diferencaDeAnos
    } else if (mesAtual === mesNascimento & diaNascimento > diaAtual) {
        return diferencaDeAnos - 1
    } else if (diaNascimento <= diaAtual){
        return diferencaDeAnos
    } else{
        return diferencaDeAnos - 1
    }
}

export { inputAno, anoNascimento, pegarAnoNascimento, calcularAno }