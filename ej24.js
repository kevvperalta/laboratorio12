function crearSecuencia(inicio, paso) {
    let valorActual = inicio - paso;    
    return function() {
        valorActual += paso;
        return valorActual;
    };
}
let inicio24 = parseInt(prompt("Ingresa el valor inicial:"));
let paso24 = parseInt(prompt("Ingresa el paso:"));

let secuencia24 = crearSecuencia(inicio24, paso24);

let resultados24 = [];
let cantidad24 = parseInt(prompt("Cuantos números de la secuencia quieres generar?"));

for (let i = 0; i < cantidad24; i++) {
    resultados24.push(secuencia24());
}
alert(`Ejercicio 24: Secuencia = [${resultados24.join(', ')}]`);