
const readline = require('readline');


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function mostrarTabuada(numero) {
    console.log(`Tabuada do ${numero}:`);
    for (let i = 1; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
}


rl.question('Digite um número: ', (entrada) => {
    const numero = parseInt(entrada);

    if (isNaN(numero)) {
        console.log('Por favor, insira um número válido.');
    } else {
        mostrarTabuada(numero);
    }

  
    rl.close();
});
