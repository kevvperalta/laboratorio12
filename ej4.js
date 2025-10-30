function areaRectangulo(base, altura) {
    return base * altura;
}

let base4 = parseFloat(prompt("Ingresa la base del rectángulo:"));
let altura4 = parseFloat(prompt("Ingresa la altura del rectángulo:"));
let resultado4 = areaRectangulo(base4, altura4);
alert(`Ejercicio 4: Área del rectángulo (${base4} x ${altura4}) = ${resultado4}`);