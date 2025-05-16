console.log("Conectado correctamente...")

let arreglo = [10, 30, 20, 90, 60, 40, 70]

function diferenciaCentroExtremos(){
    let centro = arreglo[3];
    let extremos = arreglo[0] + arreglo[arreglo.length-1]
    let diferencia = centro - extremos

alert("La diferencia entre el centro y los extremos es: \n"
    + diferencia)
}