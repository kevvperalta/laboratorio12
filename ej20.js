function ejecutarOperacion(fn, x, y) {
    return fn(x, y);
}
let operacion20 = prompt("Elige una operación (suma, resta, multiplicacion, division):");
let x20 = parseFloat(prompt("Ingresa el primer número:"));
let y20 = parseFloat(prompt("Ingresa el segundo número:"));

let funcionOperacion;
switch(operacion20) {
    case 'suma':
        funcionOperacion = (a, b) => a + b;
        break;
    case 'resta':
        funcionOperacion = (a, b) => a - b;
        break;
    case 'multiplicacion':
        funcionOperacion = (a, b) => a * b;
        break;
    case 'division':
        funcionOperacion = (a, b) => b !== 0 ? a / b : "Error: división por cero";
        break;
    default:
        funcionOperacion = (a, b) => "Operación no válida";
}

let resultado20 = ejecutarOperacion(funcionOperacion, x20, y20);
alert(`ejercicio 20: ${x20} ${operacion20} ${y20} = ${resultado20}`);