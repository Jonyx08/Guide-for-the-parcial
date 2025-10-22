import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function temp(Celcius){
    let salida = ((Celcius * 9/5)+32)  
    return Math.round(salida)
}

rl.question('Excribe la temperatura que quieres regresar a fahrenheit: ', (cel)=>{
    let resultado = temp(cel)
    console.log(`Tus grados celsius a farenheit son los siguiente: ${resultado}`);
    rl.close()    
});