function operacionesMatematicas() {
    let sumar = (a, b) => a + b;
    let restar = (a, b) => a - b;
    let multiplicar = (a, b) => a * b;
    let dividir = (a, b) => b !== 0 ? a / b : "error";
    
    return { sumar, restar, multiplicar, dividir };
}

let operaciones = operacionesMatematicas();
let num114 = parseFloat(prompt("Ingresa el primer número:"));
let num214 = parseFloat(prompt("Ingresa el segundo número:"));

let suma14 = operaciones.sumar(num114, num214);
let resta14 = operaciones.restar(num114, num214);
let multiplicacion14 = operaciones.multiplicar(num114, num214);
let division14 = operaciones.dividir(num114, num214);

alert(`Ejercicio 14:\n${num114} + ${num214} = ${suma14}\n${num114} - ${num214} = ${resta14}\n${num114} * ${num214} = ${multiplicacion14}\n${num114} / ${num214} = ${division14}`);