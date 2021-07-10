let number = parseInt(prompt("Introduce un número entero mayor que 1"));
let cont = 0;
if (number == 1) {
  console.log("El número no es válido");
} else {
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      console.log(`El número ${number} no es primo`);
      cont = cont + 1;
      break;
    }
  }
}
if (cont == 0 && number != 1) console.log(`El número ${number} es primo`);
