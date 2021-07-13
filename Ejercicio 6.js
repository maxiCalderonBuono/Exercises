let suma= 0;
let contador= 0;
while (suma < 50) { 

suma += parseInt(prompt("Introduce nuevamente un número", "El primero que venga a tu mente"));
contador ++;
}
console.log(`La cantidad de números introducidos fue de  ${contador} y la cantidad sumada fue de ${suma}`);