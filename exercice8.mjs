import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function salary(sal, hoursMore, valuehour){
    let resultHoursMore = (valuehour * 1.5) * hoursMore
    let sumSalary = sal + resultHoursMore
    
    return sumSalary
}

rl.question('Ingresa tu salario base: ', (salary1) => {
    rl.question('Ingresa tus horas extra: ', (hoursPlus) => {
        rl.question('Ingresa el pago de tus horas normales: ', (hourspay) => {
            const base = parseFloat(salary1);
            const extraHours = parseFloat(hoursPlus);
            const hourRate = Number(hourspay);

            if (Number.isNaN(base) || Number.isNaN(extraHours) || Number.isNaN(hourRate)) {
                console.log('Entrada inválida: asegúrate de ingresar números.');
            } else {
                let result = salary(base, extraHours, hourRate);
                console.log(`Tu salario completo seria de: ${result}`);
            }

            rl.close();
        });
    });
});