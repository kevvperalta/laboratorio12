function media(...numeros) {
    if (numeros.length === 0) return 0;
    
    let suma = numeros.reduce((total, num) => total + num, 0);
    return suma / numeros.length;
}

alert("Ingresa varios números separados por comas:");
let entrada18 = prompt("ejemplo: 10, 20, 30, 40");
let numeros18 = entrada18.split(',').map(num => parseFloat(num.trim()));
let resultado18 = media(...numeros18);

alert(`Ejercicio 18: Promedio de [${numeros18.join(', ')}] = ${resultado18.toFixed(2)}`);