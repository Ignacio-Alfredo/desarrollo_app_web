console.log("Conectado correctamente")

function mensajeConcatenado() {
    let numeros = [3, 9, 10, 8, 15];
    let suma = numeros[2] + numeros[4];
    let palabras = ["como", "chao", "Hola", "estás", "amigo"];    
    let mensaje = (palabras[2] + " " + palabras[4]);
    alert("El mensaje es: "  + mensaje + " y el resultado de la suma de valores es de: " + suma);
}