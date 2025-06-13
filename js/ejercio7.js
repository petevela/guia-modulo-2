

let enteros = [4,78,-10,8,9,15,25,6,35,50]

let negativos = 0;
let positivos = 0;
let multiplosDe15 = 0;
let sumaPares = 0;

for (let i = 0; i <= enteros.length; i++) {
    let numero = parseInt(enteros[i]);

    if (numero < 0) {
        negativos++;
    }

    if (numero > 0) {
        positivos++;
    }

    if (numero % 15 === 0) {
        multiplosDe15++;
    }

    if (numero % 2 === 0) {
        sumaPares += numero;
    }
}

console.log("Cantidad de números negativos:", negativos);
console.log("Cantidad de números positivos:", positivos);
console.log("Cantidad de múltiplos de 15:", multiplosDe15);
console.log("Suma de números pares:", sumaPares);