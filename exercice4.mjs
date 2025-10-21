import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function Suma(num1, num2, num3){
    return num1 + num2 + num3;
}

rl.question('Ingrese el precio del primer producto: ', (input1) =>{
    rl.question('Ingrese el precio del segundo producto: ', (input2) =>{
        rl.question('Ingrese el precio del tercer producto: ', (input3) =>{
            const resultado = Suma(Number(input1), Number(input2), Number(input3));
            console.log(`\nEl número mayor es: ${resultado}`);
            rl.close(); 
        }); 
    });
});