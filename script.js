//menor que 18,5 - Abaixo do Peso
//18,5 - 24,9 - Peso normal
//25,0 - 29,9 - Excesso de Peso
//30,0 - 34,9 - Obesidade 1
//35,0 - 39,9 - Obesidade 2
//maior 40,0 - Obesidade 3


let inputPeso = document.getElementById("peso")
let inputAltura = document.getElementById("altura")

let resultado = document.getElementById("resultado")

function calcular() {
    let peso = inputPeso.value
    let altura = inputAltura.value

    let imc = peso / (altura * altura)
    let mensagem = ""
    
    if (imc < 18.5){
        mensagem = "Abaixo do Peso"
    }
    else if (imc <= 24.9){
        mensagem = "Peso Normal"
    }
    else if (imc <= 29.9){
        mensagem = "Excesso de Peso"
    }
    else if (imc <= 34.9){
        mensagem = "Obesidade 1"
    }
    else if (imc <= 39.9){
        mensagem = "Obesidade 2"
    }
    else{
        mensagem ="Obesidade 3"
    }
    
    resultado.innerHTML = `<p> Seu IMC é ${imc.toFixed(2)} ${mensagem}</p>`
    
}

