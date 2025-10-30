const calcularDescuento = function(precio, porcentaje) {
    return precio - (precio * porcentaje / 100);
};

let precio = parseFloat(prompt("Ingresa el precio:"));
let porcentaje = parseFloat(prompt("Ingresa el porcentaje de descuento:"));
let resultado9 = calcularDescuento(precio, porcentaje);
alert(`Ejercicio 9: Precio con ${porcentaje}% de descuento: $${resultado9.toFixed(2)}`);