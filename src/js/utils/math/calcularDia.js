const inputDia = document.getElementById("input-dia")

// Difinindo datas que serão usadas
const dataAtual = new Date()
const [diaAtual, mesAtual, anoAtual] = [
    dataAtual.getDate(),
    dataAtual.getMonth() + 1,
    dataAtual.getFullYear()
]

const diasMesPassado = new Date(anoAtual, mesAtual - 1, 0).getDate()

// Função que atualiza o valor do campo
let diaNascimento = 0
const pegarDiaNascimento = (valor) => {
    diaNascimento = Number(valor)
}

// Calculando dias vividos
const calcularDia = () => {
    pegarDiaNascimento(inputDia.value)
    
    if (diaAtual >= diaNascimento) {
        return diaAtual - diaNascimento
    } else {
        return diasMesPassado - diaNascimento + diaAtual
    }
}

export { inputDia, diaNascimento, pegarDiaNascimento, calcularDia }