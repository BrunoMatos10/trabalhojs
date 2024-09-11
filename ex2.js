
const readline = require('readline');


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function verificarParOuImpar(numero) {
    if (isNaN(numero)) {
        console.log('Por favor, insira um número válido.');
        return;
    }

    const resultado = (numero % 2 === 0) ? 'par' : 'ímpar';
    console.log(`O número ${numero} é ${resultado}.`);
}

rl.question('Digite um número: ', (entrada) => {
    const numero = parseInt(entrada);
    verificarParOuImpar(numero);

    
    rl.close();
});

