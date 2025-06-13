
let celsius = parseInt(prompt("Ingrese un grado Celsius:"));

let resultado = (celsius * (9/5)) + 32;

if(resultado >= 14 && resultado <= 32){
    console.log("Temperatura baja");
}else if(resultado > 32 && resultado <= 68){
    console.log("Temperatura adecuada");
}else if(resultado > 68 && resultado <= 96){
    console.log("Temperatura alta");
}else{
    console.log("Temperatura desconocida");
}

