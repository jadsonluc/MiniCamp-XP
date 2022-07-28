// imc = peso / (altura * altura)

function imc(peso, altura) {
    var imc = peso / (altura * altura);

    if( imc < 18.5){
        console.log("Você está abaixo do peso")
    } else if(imc >= 18.5 && imc < 25) {
        console.log("Você está com peso normal")
    } else if(imc >= 25 && imc < 30){
        console.log("Você está com sobrepeso")
    } else if(imc >= 30 && imc < 35){
        console.log("Você está com obesidade Grau I")
    } else if (imc >= 35 && imc < 40){
        console.log("Você está com obesidade Grau II")
    } else {
        console.log("Você está com obesidade morbida")
    }
    return imc
}