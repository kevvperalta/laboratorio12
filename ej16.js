function acumulador(valorInicial) {
    let total = valorInicial;
    
    return function sumar(valor) {
        total += valor;
        return total; };
}

let valorInicial16 = parseFloat(prompt("Ingresa el valor inicial:"));
let acumulador16 = acumulador(valorInicial16);
alert(`Acumulador creado con valor inicial: ${valorInicial16}`);

let valorSumar16 = parseFloat(prompt("Ingresa un valor para sumar:"));
let resultado16 = acumulador16(valorSumar16);
alert(`ejercicio 16: Nuevo total = ${resultado16}`);