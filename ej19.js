function mostrarDatos(nombre, edad, ...hobbies) {
    let mensaje = `\nNombre: ${nombre}\nEdad: ${edad}`;
    
    if (hobbies.length > 0) {
        mensaje += `\nHobbies: ${hobbies.join(', ')}`;
    } else {
        mensaje += `\nHobbies: No especificados`;
    }
    
    alert(mensaje);
}

let nombre19 = prompt("Ingresa tu nombre:");
let edad19 = prompt("Ingresa tu edad:");
let hobbies19 = prompt("Ingresa tus hobbies separados por comas:");

if (hobbies19) {
    mostrarDatos(nombre19, edad19, ...hobbies19.split(',').map(hobby => hobby.trim()));
} else {
    mostrarDatos(nombre19, edad19);
}