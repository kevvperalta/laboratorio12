function filtrarArreglo(arr, callback) {
    return arr.filter(callback);
}
alert("Ingresa números separados por comas:");
let entrada21 = prompt("Ejemplo: 1, 2, 3");
let numeros21 = entrada21.split(',').map(num => parseInt(num.trim()));

let criterio21 = prompt("Elige criterio (pares, impares, mayores5):");

let callback21;
switch(criterio21) {
    case 'pares':
        callback21 = num => num % 2 === 0;
        break;
    case 'impares':
        callback21 = num => num % 2 !== 0;
        break;
    case 'mayores5':
        callback21 = num => num > 5;
        break;
    default:
        callback21 = num => true;
}

let resultado21 = filtrarArreglo(numeros21, callback21);
alert(`Ejercicio 21: Números ${criterio21} = [${resultado21.join(', ')}]`);