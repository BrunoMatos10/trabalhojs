
const readline = require('readline');


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calcularSoma(numero) {
    let soma = 0;
    for (let i = 1; i <= numero; i++) {
        soma += i;
    }
    return soma;
}


rl.question('Digite um número: ', (entrada) => {
    const numero = parseInt(entrada);

    if (isNaN(numero) || numero <= 0) {
        console.log('Por favor, insira um número válido maior que 0.');
    } else {
        const soma = calcularSoma(numero);
        console.log(`A soma dos números de 1 a ${numero} é ${soma}.`);
    }

    
    rl.close();
});
