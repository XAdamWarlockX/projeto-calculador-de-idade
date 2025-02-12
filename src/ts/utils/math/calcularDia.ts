const inputDia = document.getElementById("input-dia") as HTMLInputElement

// Difinindo datas que serão usadas
const dataAtual: Date = new Date()
const [diaAtual, mesAtual, anoAtual]: number[] = [
    dataAtual.getDate(),
    dataAtual.getMonth() + 1,
    dataAtual.getFullYear()
]

const diasMesPassado: number = new Date(anoAtual, mesAtual - 1, 0).getDate()

// Função que atualiza o valor do campo
let diaNascimento: number = 0
const pegarDiaNascimento = (valor: number | string): void => {
    diaNascimento = Number(valor)
}

// Calculando dias vividos
const calcularDia = (): number => {
    pegarDiaNascimento(inputDia.value)
    
    if (diaAtual >= diaNascimento) {
        return diaAtual - diaNascimento
    } else {
        return diasMesPassado - diaNascimento + diaAtual
    }
}

export { inputDia, diaNascimento, pegarDiaNascimento, calcularDia }