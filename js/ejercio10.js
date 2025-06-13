
let edadesManana = [];
for (let i = 0; i <= 4; i++) {  
    edadManana = parseInt(prompt("Ingrese edad turno mañana:"));
    edadesManana.push(edadManana);
}

let edadesTarde = [];
for (let i = 0; i <= 5; i++) {  
    edadTarde = parseInt(prompt("Ingrese edad turno tarde:"));
    edadesTarde.push(edadTarde);
}

let edadesNoche = [];
for (let i = 0; i <= 10; i++) {  
    edadNoche = parseInt(prompt("Ingrese edad turno noche:"));
    edadesNoche.push(edadNoche);
}

const calcularPromedio = (edades) => { 
    let sumaEdades = edades.reduce((acumulador, edad) => acumulador + edad, 0);
    return sumaEdades / edades.length;
}

let promedioManana = calcularPromedio(edadesManana);
let promedioTarde = calcularPromedio(edadesTarde);
let promedioNoche = calcularPromedio(edadesNoche);

function obtenerTurnoConMayorPromedio(promedioManana, promedioTarde, promedioNoche) {
  if (promedioManana > promedioTarde && promedioMañana > promedioNoche) {
    return "mañana";
  } else if (promedioTarde > promedioManana && promedioTarde > promedioNoche) {
    return "tarde";
  } else {
    return "noche";
  }
}

console.log('Promedio turno mañana: ' + calcularPromedio(edadesManana))
console.log('Promedio turno tarde: ' + calcularPromedio(edadesTarde))
console.log('Promedio turno noche: ' + calcularPromedio(edadesNoche))


window.alert('EL promedio mayor esta en: ' + obtenerTurnoConMayorPromedio(promedioManana, promedioTarde, promedioNoche));

