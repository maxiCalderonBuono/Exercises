function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los

  let i = 0;
  while (i < arreglo.length) {
    if (arreglo[i] !== arreglo[i + 1]) {
      return false;
    } else {
      return true;
    }
    i++;
  }
}

console.log(todosIguales([1, 1, 1, 1])); //elementos de un arreglo son iguales:
//retornar true, caso contrario retornar false.
//Escribe tu código aquí
