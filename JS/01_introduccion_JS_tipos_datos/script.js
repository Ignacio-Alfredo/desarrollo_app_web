//Prueba de conexión JS
console.log("Conexión establecida con JS!");

//Creación de Variables

let num = 25; 
const numDec = 3.14;
let cad = "Hola, ¿Cómo Estas?";


function numeroEntero(){
    return "Variable Númerica: " + num;
}

function numeroDecimal (){
    return "Variable Númerica: " + numDec;
}

function cadenaTexto (){
    return "Cadena de Texto: " + cad;
}


//Impresión en Consola
console.log(numeroEntero()); 
console.log(numeroDecimal());
console.log(cadenaTexto());
