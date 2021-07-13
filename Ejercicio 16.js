let autos = [
  {
    nombre: "Juan",
    costo: 100000,
    tiempo: 120,
    repuestos: ["puerta", "paragolpes", "rueda"]
  },
  {
    nombre: "Tomy",
    costo: 2000,
    tiempo: 48,
    repuestos: ["puerta", "paragolpes"]
  },
  {
    nombre: "Juan",
    costo: 80000,
    tiempo: 120,
    repuestos: ["vidrio", "filtro de aire", "filtro de aceite"]
  }
]

let autoCaro= {
  costo: 0
};

let repuestosJuan = [];

let costoTotal = 0;

function sumarRepuestosJuan (repuestos) {
  for (let i= 0; i < repuestos.length; i++) {
    repuestosJuan.push(repuestos[i]);
  }
  return repuestosJuan
}

for (let auto of autos) {
  if (auto.costo > autoCaro.costo) {
    autoCaro= auto;
  }
  if (auto.nombre === "Juan") {
    repuestosJuan= sumarRepuestosJuan(auto.repuestos);
  }
  costoTotal += auto.costo;
}
console.log(`El arreglo más caro es de $ ${autoCaro.costo} y necesita los siguientes repuestos: ${autoCaro.repuestos}`)

console.log(`Los arreglos necesarios para las personas con nombre Juan son: ${repuestosJuan}`)

console.log(`Todos los arreglos demandarán una inversión de $ ${costoTotal}`)