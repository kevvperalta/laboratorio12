function potencia(base, exponente) {
    if (exponente === 0) return 1;
    if (exponente === 1) return base;
    if (exponente < 0) return 1 / potencia(base, -exponente);
    
    return base * potencia(base, exponente - 1);
}
let base23 = parseFloat(prompt("Ingresa la base:"));
let exponente23 = parseInt(prompt("Ingresa el exponente:"));

let resultado23 = potencia(base23, exponente23);
alert(`ejercicio 23: ${base23}^${exponente23} = ${resultado23}`);