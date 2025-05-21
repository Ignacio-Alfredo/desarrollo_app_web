//Prueba de conexión JS
console.log("Conexión establecida con JS!");

//Creación de Variables

let num = 25; 
const numDec = 3.14;
let cad = "Hola, ¿Cómo Estas?";
let Bool = true; 
let arry = [1,2,3]; 
let obj = {
    nombre: "Alberto", 
    edad:19
    };
let und;

let Null = null;

function numeroEntero(){
    return "Variable Númerica: " + num;
}

function numeroDecimal (){
    return "Variable Númerica: " + numDec;
}

function cadenaTexto (){
    return "Cadena de Texto: " + cad;
}

function numeroBooleano(){
    return "Variable Booleano: "+ Bool
}

function numeroArryse(){
    return "Variable Arryse: "+ arry
}

function numeroName(){
    return "Variable Object: "+ obj.nombre + ", " + obj.edad; 
}

function numeroInde(){
    return "Variable Undefined: "+ und
}


function numeroNull(){
    return "Variable Null: "+ Null
}


console.log(numeroEntero()); 
console.log(numeroDecimal());
console.log(cadenaTexto());
console.log(numeroBooleano());
console.log(numeroArryse());
console.log(numeroName());
console.log(numeroInde());
console.log(numeroNull());