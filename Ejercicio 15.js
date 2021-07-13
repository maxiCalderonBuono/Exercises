
/*const esPar = (number =Number(prompt(`Introduce un número entero`))) => {
    if (number % 2 === 0) {
        return true;
    }else {
        return false;
    }
}
console.log(esPar())*/

/*const ordenInverso = (string =prompt(`Introduce una frase`)) => {
  return string.split("").reverse().join("")
}*/

/*const ordenInverso2 =(string =prompt(`Introduce una frase`)) => {
    let frase =""
    for ( let i = string.length-1; i >= 0; i--) {
         frase += string[i]
    }
    return frase
  }


console.log(ordenInverso2())*/


const deMayorMenor = (a,b,c) => {
   let arr = []
   
   arr[0] = a
   arr[1] = b
   arr[2] = c
   return arr.sort((a,b)=> b-a);

}
console.log(deMayorMenor(1,45,23))