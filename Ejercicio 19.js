
let lista = [
    {
    id: "19310",
    nombre: "Bautista",
    },
    {
    id: "90010",
    nombre: "Ema",
    },
    {
    id: "005106",
    nombre: "Lucas",
    },
    {
    id: "00000",
    nombre: "Meison",
    }
]


const pedirUsuario = lista => {
    let numRandom = Math.floor(Math.random() * 4)
    if (lista[numRandom].id === "00000"){
        throw new Error("ForbiddenInformation");
    }
    return lista[numRandom]
}

const pedirInformacion = () => {
    try {
        let usuario= pedirUsuario(lista)
        return {...usuario, id:parseInt(usuario.id)};
    }catch(error) {
        return error.message;
    }
}
console.log(pedirInformacion())