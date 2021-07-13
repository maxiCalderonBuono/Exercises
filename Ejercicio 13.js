//La tienda de ropa
let precioFinal = 0;

let precioDePrenda = Number(prompt("Introduce el precio de la prenda $"))

if (precioDePrenda >= 1500 && precioDePrenda <= 3000) {
    let porcentajeDeAumento = Number(prompt("Introduce el porcentaje de aumento %"));
    if (porcentajeDeAumento >= 25 && porcentajeDeAumento <= 100) {
        precioFinal= precioDePrenda + precioDePrenda * (porcentajeDeAumento/100)
    }
}

if(precioFinal > 4000){
    console.log("Precio excedido");
} else console.log(`EL precio de la prenda es ${precioFinal}`);
