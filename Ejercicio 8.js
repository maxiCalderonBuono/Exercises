const letras= ["T", "R", "W", "A", "G","M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L","C", "K", "E", "T" ];

const dni= prompt(`Introduce tu número de DNI`)

if (dni.length == 8 && parseInt(dni)> 0) {
    let position= dni % 23;
    console.log(`Le correponde la letra ${letras[position]}`)
}



