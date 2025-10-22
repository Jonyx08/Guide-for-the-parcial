import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function discount(price, discount1){
    let finaldiscount = discount1/100
    let finalprice = price - (price * finaldiscount)

    return Math.round(finalprice)
}

rl.question('Ingrese el precio del producto: ', (priceques)=>{
    rl.question('Ingrese el descuento de el producto: ', (discount2)=>{
        let finalresult = discount(priceques, discount2)
        console.log(`este es el precio final: ${finalresult}`);
        rl.close()    
    })
})