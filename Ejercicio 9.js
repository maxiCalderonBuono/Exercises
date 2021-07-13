let vocales = ["a","e","i","o","u"]

const palabra = prompt("Introduce una palabra").toLowerCase();
let cont= 0;

for (const word of palabra){

    for (const letra of vocales ){
        if (word === letra) {
            cont +=1;
        }
    }
}

console.log(`La palabra ${palabra} tiene ${palabra.length} letras, de la cuales ${cont} letras son vocales y ${palabra.length-cont} letras son consonantes`)

