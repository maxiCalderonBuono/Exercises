// let figure= prompt("¿De qué figura quieres calcular el área", "rectangulo, triangulo, ciruclo").toLowerCase();

//  if (figure=== "rectangulo") {
//      let base= Number(prompt("Intrudce la base", "Debe ser un valor numérico"));
//      let altura= Number(prompt("Intrudce la altura", "Debe ser un valor numérico"));

//      console.log(`El área del ${figure} es ${base * altura}`);
//  }
//  else if(figure=== "triangulo") {
//      let base= Number(prompt("Intrudce la base", "Debe ser un valor numérico"));
//      let altura= Number(prompt("Intrudce la altura", "Debe ser un valor numérico"));

//      console.log(`El área del ${figure} es ${base * altura/2}`);
//  }
//  else if (figure=== "circulo") {
//      let radio= Number(prompt("Intrudce el radio del círculo", "Debe ser un valor numérico"));
//      console.log(`El área del ${figure} es ${Math.PI*radio**2}`);
//  }
//  else {
//      console.log("Esa figura no está contemplada en el programa");
//  }

 let figure= prompt("¿De qué figura quieres calcular el área", "rectangulo, triangulo, circulo").toLowerCase();

 let base;
 let altura;
 let radius;

 switch (figure){
     case "rectangulo":
         base= prompt("Intrudce la base del rectángulo", "Debe ser un valor numérico");
         altura= prompt("Intrudce la altura del rectángulo", "Debe ser un valor numérico");
         console.log(`El área del ${figure} es ${base * altura}`);
         break
     case "triangulo":
         base= prompt("Intrudce la base del triángulo", "Debe ser un valor numérico");
         altura= prompt("Intrudce la altura del triángulo", "Debe ser un valor numérico");
         console.log(`El área del ${figure} es ${base * altura/2}`);
         break
     case "circulo":
         radius= prompt("Intrudce del radio del circulo", "Debe ser un valor numérico");
         console.log(`El área del ${figure} es ${Math.PI * Math.pow(radius,2)}`);
         break
     default:
         console.log("Figura no contemplada dentro del programa");
 }