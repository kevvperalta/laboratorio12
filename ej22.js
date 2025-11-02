function descargaArchivo(url, callback) {
    alert("Descargando...");
    setTimeout(() => {
        callback(url);
    }, 2000);
}
let url22 = prompt("Ingresa la URL del archivo:");
descargaArchivo(url22, function(url) {
    alert(`Ejercicio 22: Descarga completa de ${url}`);
});