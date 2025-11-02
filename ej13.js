function procesarTexto(texto) {
    function limpiarEspacios(texto) {
        return texto.trim().replace(/\s+/g, ' ');
    }
    
    function contarPalabras(texto) {
        return texto.split(' ').filter(palabra => palabra !== '').length;
    }
    
    let textoLimpio = limpiarEspacios(texto);
    let cantidadPalabras = contarPalabras(textoLimpio);
    
    alert(`\nTexto limpio: "${textoLimpio}"\nCantidad de palabras: ${cantidadPalabras}`);
}

let texto13 = prompt("Ejercicio 13 - Ingresa el texto con espacios extras:");
procesarTexto(texto13);