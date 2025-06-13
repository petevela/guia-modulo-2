let nombre = 'Pedro Velasco';
let salario = 800;
let categoria = "F";
let aumento = 0;
let salarioFinal = 0;

switch(categoria){
    case "A":
        aumento = salario*0.15;
        break;
    case "B":
        aumento = salario*0.30;
        break;
    case "C":
        aumento = salario*0.10;
        break;
    case "D":
        aumento = salario*0.20;
        break;
    default:
        aumento = 0;
}

salarioFinal = (salario + aumento);

console.log('Nombre: ' + nombre + ', salario actual: ' + salario + ', aumento: ' + aumento + ', salario final: ' + salarioFinal);
