import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function contarCaracteres(cadena) {
    return cadena.length;
}

rl.question('Ingrese una palabra o frase que desea contar: ', (input) =>{
    const resultado = contarCaracteres(input);
    console.log(`\nNumero de caracteres: ${resultado}`);
    rl.close(); 
});
