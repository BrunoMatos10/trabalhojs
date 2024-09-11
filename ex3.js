
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function verificarIdade(idade) {
    if (isNaN(idade) || idade < 0) {
        console.log('Por favor, insira uma idade válida.');
    } else {
        const resultado = idade >= 18 ? 'maior de idade' : 'menor de idade';
        console.log(`A pessoa é ${resultado}.`);
    }
}


rl.question('Digite a idade: ', (entrada) => {
    const idade = parseInt(entrada);
    verificarIdade(idade);

    
    rl.close();
});
