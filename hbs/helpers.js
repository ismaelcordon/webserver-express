const hbs = require('hbs')

// Helpers. La funcion de obtencion de año se usa tanto en home, como en about en el footer
// Para evitar la duplicidad de código, creamos esta funcion getAnio que simplemente deberemos llamar en el parcial footer
hbs.registerHelper('getAnio', () => {
    return new Date().getFullYear();
})

hbs.registerHelper('capitalizar', (texto) => {
    let palabras = texto.split(' ');
    palabras.forEach((palabra, index) => {
        palabras[index] = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
    });

    return palabras.join(' ');
})