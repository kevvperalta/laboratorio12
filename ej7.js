let promedio = function(nota1, nota2, nota3) {
    return (nota1 + nota2 + nota3) / 3;
};

let nota1 = parseFloat(prompt("Ingresa la primera nota:"));
let nota2 = parseFloat(prompt("Ingresa la segunda nota:"));
let nota3 = parseFloat(prompt("Ingresa la tercera nota:"));
let resultado7 = promedio(nota1, nota2, nota3);
alert(`Ejercicio 7: Promedio de ${nota1}, ${nota2}, ${nota3} = ${resultado7.toFixed(2)}`);