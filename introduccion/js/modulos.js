import {texto as txt} from "./ejercicios.js"
let cadena = "Hola Mundo"

let francisco = {
    nombre: "Francisco Javier",
    apellido: "Contreras Sanchez"
}

console.log(typeof francisco.nombre)
// txt.numeroCaracteres(cadena)
txt.cortarCadena(francisco.nombre,9)
txt.cadenaArreglo(francisco.apellido)
console.log(isNaN(" a"))
txt.repetirCadena(cadena,5)