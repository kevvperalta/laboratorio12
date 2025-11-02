let componerTransfor = (func1, func2) => {
    return (texto) => func2(func1(texto));
};

let aMayusculas = (texto) => texto.toUpperCase();
let agregarSigno = (texto) => texto + "!";
let transformar = componerTransfor(aMayusculas, agregarSigno);

let texto12 = prompt("Ingresa un texto:");
let resultado12 = transformar(texto12);
alert(`Ejercicio 12: "${texto12}" transformado: "${resultado12}"`);