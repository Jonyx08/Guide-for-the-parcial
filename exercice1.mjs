import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function ordenarCadena(cadena) {
  return cadena
    .toLowerCase()
    .replaceAll(' ', '')
    .split('')
    .sort()
    .join('');
}

rl.question('Ingrese una palabra o frase: ', (input) => {
  const resultado = ordenarCadena(input);
  console.log(`\nCadena ordenada alfabéticamente: ${resultado}`);
  rl.close();
});
