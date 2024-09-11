const teclado = require("prompt-sync")({ sigint: true });

// Solicita o peso e a altura do usuário
const peso = parseFloat(teclado("Digite seu peso em kg: "));
const altura = parseFloat(teclado("Digite sua altura em metros: "));

// Verifica se a entrada é válida
if (isNaN(peso) || isNaN(altura) || altura <= 0) {
    console.log("Por favor, insira valores válidos para peso e altura.");
} else {
    // Calcula o IMC
    const imc = peso / (altura * 2);
    console.log(`Seu IMC é ${imc.toFixed(2)}`);

    // Classifica o IMC
    if (imc < 18.5) {
        console.log("Abaixo do peso");
    } else if (imc >= 18.5 && imc < 25) {
        console.log("Peso normal");
    } else if (imc >= 25 && imc < 30) {
        console.log("Sobrepeso");
    } else if (imc >= 30 && imc < 35) {
        console.log("Obesidade grau 1");
    } else if (imc >= 35 && imc < 40) {
        console.log("Obesidade grau 2");
    } else {
        console.log("Obesidade grau 3");
    }
}
