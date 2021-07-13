const numbers = [1, 2, 3, 4, 5];
let pares = [];
let impares = [];
let ramdon = parseInt(Math.random() * (10 - 1) + 1);

for (const number of numbers) {
  if ((number * ramdon) % 2 == 0) {
    pares.push(number*ramdon);
  } else {
    impares.push(number*ramdon);
  }
}
console.log(ramdon);
console.log(`Este es el array de números pares ${pares}`);
console.log(`Este es el array de números impares ${impares}`);
