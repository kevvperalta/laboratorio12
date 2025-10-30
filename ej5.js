function esMultiplo(a, b) {
    return a % b === 0;
}

let numA5 = parseInt(prompt("Ingresa el primer número:"));
let numB5 = parseInt(prompt("Ingresa el segundo número:"));
let resultado5 = esMultiplo(numA5, numB5);
alert(`Ejercicio 5: ¿Es ${numA5} multiplo de ${numB5}? ${resultado5}`);