document.write("<h1> Hola JavaScript </h1>")
// comentarios de una linea
/* Comentarios de bloque */

let nombre="Carlos"
console.log(nombre)

// Array

let datos = ["Ana", "Pablo", "Carlos"]

let edades = [23, 17, 44, 15]

let objetoDatos={
    nombre: "Ana",
    edad: 25,
    cuenta: "Alumno",
    notas: [5, 5, 6.8, 5.9]
}

console.log(datos)
console.log(edades)
console.log(objetoDatos)

// Operadores relacionales

/*
>  mayor
<  menor
>= mayor e igual
<= menor e igual
== igual
!= diferente
=== igual igual
*/

let uno = 1;
let unoString = "1";

console.log(uno == unoString)
console.log(uno === unoString)

// Estructuras de control

if(uno == unoString){
    console.log("Son iguales?")
}
if (uno === unoString){
    console.log("Son iguales iguales")
}
else{
    console.log("No son iguales")
}
// elseif(uno!=unoString)
// {
//     console.log("No son iguales")
// }

let tipoAlumno = 'diurno'
switch (tipoAlumno){
    case 'diurno':
        console.log("Es alumno de dia")
        break;
    case 'Verpertino':
        console.log("Es alumno de noche")
    default:
        console.log("No es alumno")
}

// cliclo While

/* Mostrar los primeros 10 numeros positivos */
let numero = 1;

while(numero < 10){
    console.log(numero)
    numero = numero + 1
}

// cliclo For

let nombres = ["Ana", "Pablo", "Carlos"]

for(let i=0; i<nombres.length; i++){
    console.log(nombres[i])
}

//Funciones

function mensaje(){
    console.log("Saludos")
}
mensaje()

//Nota: if (numero % 2 == 0) numeros primos

/* Muestre la cantidad de numeros pares que existen dentro de un arreglo
use una funcion si el numero es par o no */

let numeros = [45, 33, 14, 23, 20, 4, 7, 12, 68, 3]
let contP = 0

function es_par(num){
    if(numero % 2 == 0){
        return true
    }
    return false
}

for (let i=0; i<numeros.length; i++){
    if (es_par(numeros[i]))
        contP++
}
console.log("Los pares son ", contP)

//Modifique el ejercicio para mostrar la cantidad de impares