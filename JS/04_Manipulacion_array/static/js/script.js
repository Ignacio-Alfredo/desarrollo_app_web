let compras =[]; //arreglo vacio

function listaCompra(){
    compras.push("pan",'leche','huevos')
    alert(`Lista de compras: ${compras.join(" - ")}`);
}

// 🧠 Ejercicio 2: 

function comprasPop() {
    alert(`lista de compras: ${compras}.`)
    let eliminado = compras.pop();
    alert(`Producto eliminado: ${eliminado}\nLista de compra actualizada: ${compras}`);
}

//🧠 Ejercicio 3:

let colores=["rojo", "azul"];
function agregaColor(){
    let entrada = prompt("Agregar un color: ")
    colores.unshift(entrada);
    alert(`El color agregado es ${entrada}\n Colores actualizados: ${colores}`);
}

//🧠 Ejercicio 4:

function eliminarPrimerColor(){
    let colorEliminado = colores.shift();
    alert('El color fue eliminado - '+ colorEliminado + '\n Colores actualizados: ' )
}

//🧠 Ejercicio 5:

let numero = [10, 20, 30]
function agregarNumeros(){
    numeros.push(40)
    alert(`Le agregamos 40 al final`)
    numeros.shift()
    alert(`Le quitamos el primer numero`)
    numeros.unshift(5)
    alert(`Le agregamos un 5 al inicio`)
    numeros.pop()
    alert(`Eliminamos el ultimo numero`)
    alert(`El arreglo quedo asi: ${numeros}`)
}

//🧠 Ejercicio 6:

let orden = []

function agregarOrdenInverso(){
    orden.unshift(3)
    orden.unshift(2)
    orden.unshift(1)
    alert(`Orden inverso: ${orden}`)
}

//🧠 Ejercicio 7:

let historial = []
function historialPro(){
    let mensaje = prompt ("Agregar un mensaje: ")
    historial.push(mensaje)
    let mensaje2 = prompt("Agregar un mensaje ")
    historial.push(mensaje2)
}