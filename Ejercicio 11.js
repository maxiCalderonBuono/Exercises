// const colors= ["azul", "amarillo", "rojo", "verde", "rosa"];
// const color= prompt("Introduce un color", "El primero que venga a tu mente").toLowerCase()
// // for (colorin of colors) {
// //     if (colorin=== color){
// //         console.log(`El color ${color} se encuentra dentro del muestrario`);
// //     }
// // }

// if(colors.indexOf(color) !== -1) {
//     console.log(`El color ${color} se encuentra dentro del muestrario`);
// }
// else {
//     console.log(`El color ${color} no se encuentra dentro del muestrario`);
// }

// let array = [1, "Hola", [34, 56]]  


// let producto = {
//     precio: 20,
//     porcentajeDeDescuento: 0.2,
//     stock: 100,
//     hijos: ["Laura", "Claudia", "Roberto" , "Andrés", "Eduardo"]
//   };

// for (let hijos of producto.hijos) {
//   console.log(hijos);
// }
 
// for (i=0; i < producto.hijos.length ; i++) {
//   console.log(producto.hijos[i]);
// }

// for (hijos in producto.hijos) {
//   console.log(producto.hijos[hijos]);
// }

function colors(color) {
   
   switch (color){
     case "blue": 
     console.log("This is blue");
   break
   case "red": 
   console.log("This is red");
   break
   case "green":
    console.log( "This is red")
    break
   case "orange":
    console.log( "This is orange");
   default:
    console.log( "Color not found");
   }
  }
