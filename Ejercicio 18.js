// Crear una funcion que recibe tres parametros chance, mensaje y resultado.

//chance: es un numero que indica el porcentaje que tiene esa funcion de arrojar un error. si chance = 20 entonces la funcion tiene 20% de posibilidades de disparar un error
//mensaje: el mensaje que tiene que tener el error que puede disparar la funcion
//resultado: es cualquier cosa, un numero, un texto, un objeto, etc. es lo que retorna la funcion si no arrojo un error

const throwError= (chance,message,result) => {
    if(Math.random() < chance/100) {
        throw new Error(message);
    }
    return result;
}

try {
    let resultado= throwError(80, "Error crítico", "Todo Ok");
    console.log(resultado);
} catch (error) {
    console.log(error.message);
}

/*Cuando queremos descargar informacion de internet, varias cosas pueden ir mal: desconexion de internet, corte de luz, perdida de informacion por culpa de seres desconocidos. Crear una funcion llamada pedirInformacion que no recibe parametros y que devuelve el siguiente objeto que corresponde a los datos de un usuario: let persona = { id: 19310, nombre: "Bautista", apellido: "Di Santo" }

La funcion pedirInformacion tiene:

25% de posibilidades de disparar un error por desconexion de internet, el nombre del error es 'NetworkError'
18% de posibilidades de disparar un error por error del servidor, el nombre del error es 'InternalError'
10% de posibilidades de disparar un error por una anomalia, el nombre del error es 'AlienError'
Cuando se llame a la funcion, informar:

Si hubo un error, informar segun el mensaje del error:
NetworkError => informar "Hubo un problema en la conexion de internet"
InternalError => informar "Hubo un error interno en el el servidor"
AlienError => informar "Una anomalia intercepto la informacion"
Si no hubo un error, informar el objeto persona*/

let persona = { id: 19310, nombre: "Bautista", apellido: "Di Santo" }

const pedirInformacion = () => {
    if (Math.random() < 0.25 && Math.random() >= 0.18) {
      throw new Error ("NetworkError");
    } else if (Math.random() < 0.18 && Math.random() >= 0.1) {
      throw new Error ("InternalError");
    }else if (Math.random() < 0.1) {
        throw new Error ("AlienError");
      }
    return persona;
}

try {
    let resultado = pedirInformacion();
    console.log(resultado)
}catch (error){
    switch (error.message) {
        case "NetworkError":
            console.log("Hubo un problema en la conexion de internet");
        break 
        case "InternalError":
            console.log("Hubo un error interno en el el servidor");
        break
        case "AlienError":
            console.log("Una anomalia intercepto la informacion");
        break        
    }
}

//Crear una funcion llamada pedirUsuario que retorna un usuario al azar de la siguiente lista:

let lista = [
    {
    id: 19310,
    nombre: "Bautista",
    },
    {
    id: 90010,
    nombre: "Ema",
    },
    {
    id: 5106,
    nombre: "Lucas",
    },
    {
    id: "00000",
    nombre: "Meison",
    }
]
/* La funcion pedirUsuario dispara un error llamado 'ForbiddenInformation' si el usuario elegido es el del id = 00000

Llamar a la funcion pedirUsuario dentro de la funcion pedirInformacion para cambiar el retorno de la funcion pedirInformacion.

Considerar que la funcion pedirInformacion ahora tiene que capturar un error, cuando la capture debe disparar un error 'NetworkError'. */

const pedirUsuario = lista => {
    let numRandom = Math.floor(Math.random() * 4)
    if (lista[numRandom].id === 00000){
        throw new Error("ForbiddenInformation");
    }
    return lista[numRandom]
}

const pedirInformacion = () => {
    try {
        let usuario= pedirUsuario(lista)
        return usuario;
    }catch(error) {
        return error.message;
    }
}
console.log(pedirInformacion())


