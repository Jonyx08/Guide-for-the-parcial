import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function MayuscadaUna(cadena){
    return cadena
    .split(' ')
    .map(palabra => palabra[0].toUpperCase() + palabra.slice(1).toLowerCase())
    .join(' ');
}

rl.question('Ingrese una palabra o frase: ', (input) => {
  const resultado = MayuscadaUna(input);
  console.log(`\nCadena con la primera letra de cada palabra en mayúscula: ${resultado}`);
  rl.close();
});
 
 
 
 
 
 
 