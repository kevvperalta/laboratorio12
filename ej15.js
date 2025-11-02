function crearContador() {
    let contador = 0;
    
    function incrementar() {
        contador++;
        return contador;}
   
    function resetear() {
        contador = 0;
        return contador;}
    
    return { incrementar, resetear };
}

let contador15 = crearContador();
alert(`Contador creado. Valor inicial: 0`);

let accion15 = prompt("Escribe 'incrementar' o 'resetear':");
if (accion15 === 'incrementar') {
    let resultado15 = contador15.incrementar();
    alert(`Ejercicio 15: Contador incrementado = ${resultado15}`);
} else if (accion15 === 'resetear') {
    let resultado15 = contador15.resetear();
    alert(`Ejercicio 15: Contador reseteado = ${resultado15}`);
}