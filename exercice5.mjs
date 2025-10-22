import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function upper(string){
    return string.toUpperCase()
}

rl.question('Ingresa la frase que necesitas en para convertirlos en mayusculas: ', (cadena)=>{
    let resultado = upper(cadena)
    console.log(`El resultado es: ${resultado}`)
    rl.close()
})