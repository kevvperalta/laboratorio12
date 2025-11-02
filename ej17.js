function saludo17(nombre = "Amigo") {
    return `¡Hola, ${nombre}! ¿como estas?`;
}

let nombre17 = prompt("Ingresa tu nombre:");
let resultado17 = saludo17(nombre17 || undefined);
alert(`ejercicio 17: ${resultado17}`);