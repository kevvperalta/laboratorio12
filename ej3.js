function esPar(num) {
    return num % 2 === 0;
}

let numero3 = parseInt(prompt("Ingresa un número para ver si es par:"));
let resultado3 = esPar(numero3);
alert(`Ejercicio 3: ¿Es ${numero3} par? ${resultado3}`);