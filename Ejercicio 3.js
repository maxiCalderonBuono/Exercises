let number= Number (prompt("Ingresa un número", "El primero que venga a tu mente"));

for (let i= 1; i <= number; i++) {
   
    if(i % 2 === 0) {
        console.log(`${i}-es par`);
    }
    else {
        console.log(`${i}-es impar`);
    }
}