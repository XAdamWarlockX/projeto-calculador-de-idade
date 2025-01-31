const inputDia = document.getElementById("input-dia")
const inputMes = document.getElementById("input-mes")
const inputAno = document.getElementById("input-ano")

const labels = document.querySelectorAll(".label")
const inputs = document.querySelectorAll(".input")
const camposInvalidos = document.querySelectorAll(".campo-invalido")
const camposObrigatorios = document.querySelectorAll(".campo-obrigatorio")

const btn = document.getElementById("botao")

// Botão que renderiza os calculos
btn.addEventListener('click', () => {
    calcularInfos()
})

// Renderizando os calculos com o Enter
inputs.forEach(input => {
    input.addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            // this.blur()
            input.blur()
            calcularInfos()
        }
    })
})

// Limitando a quantidade de números digitados dos inputs
const inputsDiaMes = [inputDia, inputMes]

inputsDiaMes.forEach(inputs => {
    inputs.addEventListener("input", () => {
        if (inputs.value.length > 2) {
            inputs.value = inputs.value.slice(0, 2)
        }
    })
})

inputAno.addEventListener("input", () => {
    if (inputAno.value.length > 4){
        inputAno.value = inputAno.value.slice(0, 4)
    }
})

// Difinindo datas que serão usadas
const dataAtual = new Date()
const [diaAtual, mesAtual, anoAtual] = [
    dataAtual.getDate(),
    dataAtual.getMonth() + 1,
    dataAtual.getFullYear()
]

const calcularInfos = () => {
    // Calculando dias vividos
const diaNascimento = Number(inputDia.value)
const calcularDias = () => {
    if (diaAtual >= diaNascimento) {
        return diaAtual - diaNascimento
    } else {
        return diasMesPassado - diaNascimento + diaAtual
    }
}

// Calculando meses vividos
const diasMesPassado = new Date(anoAtual, mesAtual - 1, 0).getDate()

const mesNascimento = Number(inputMes.value)
const calcularMeses = () => {
    const diferencaDeMeses = 12 - mesNascimento

    if (diaNascimento <= diaAtual) {
        return diferencaDeMeses + 1
    } else {
        return diferencaDeMeses
    }
}

// Calculando anos vividos
const anoNascimento = Number(inputAno.value)
const calcularAnos = () => {
    const diferencaDeAnos = anoAtual - anoNascimento

    if (mesNascimento <= mesAtual) {
        return diferencaDeAnos
    } else {
        return diferencaDeAnos - 1
    }
}

    // Renderizando todos as informações calculadas
    const renderAnos = () => {
        const idAnos = document.getElementById("anos")
        idAnos.innerHTML = calcularAnos()
    }

    const renderMeses = () => {
        const idMeses = document.getElementById("meses")
        idMeses.innerHTML = calcularMeses()
    }

    const renderDias = () => {
        const idDias = document.getElementById("dias")
        idDias.innerHTML = calcularDias()
    }

    // Previnindo campos vazios ou invalidos
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
        return
    }

    if (diaNascimento === 0 || mesNascimento === 0 || anoNascimento === 0) {
        return
    }

    renderAnos()
    renderMeses()
    renderDias()
}