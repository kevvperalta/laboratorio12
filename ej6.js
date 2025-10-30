function mayorDeTres(a, b, c) {
    return Math.max(a, b, c);
}

let a6 = parseFloat(prompt("Ingresa el primer número:"));
let b6 = parseFloat(prompt("Ingresa el segundo número:"));
let c6 = parseFloat(prompt("Ingresa el tercer número:"));
let resultado6 = mayorDeTres(a6, b6, c6);
alert(`Ejercicio 6: el mayor de ${a6}, ${b6}, ${c6} es: ${resultado6}`);