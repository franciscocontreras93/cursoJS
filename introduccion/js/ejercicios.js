/* Funciones de Validacion Cadenas: Retorna falso cuando string = null length = 0 y string = " \s " (espacios) y validacion Numeros: retorna falso cuando n = null, isNaN = true, n contiene letras y n = ""   */
function validarCadena(string) {
  if (string == null || string.length == 0 || /^\s+$/.test(string)) {
    return console.log("Cadena de texto invalida, no puede ser vacia.");
  } else {
    return string;
  }
}
function validarNumero(n) {
  if (n == undefined || isNaN(n) || /^[a-zA-Z]$/.test(n) || n == "") {
    console.log("el valor debe ser de tipo Numero");
  } else {
    return n;
  }
}
function validarSeparador(separador) {
  if (separador == null) {
    return console.log("Separador no puede ser Null o Undefined");
  } else {
    return separador;
  }
}
/* Ejercicio numero 1: Contar el numero de caracteres dentro de una cadena de texto,
ejecuto la validacion de cadenas para comprobar que el parametro string no sea una cadena nula, que no sea una cadena vacia "", y que no sea una cedena de espacios "   ". 
 */
function numeroCaracteres(string = "") {
  let cadena = new String(string);
  return console.log(validarCadena(cadena.length));
}

/* Ejercicio numero 2: recortar una cadena de texto, nuevamente valido la cadena de texto con la funcion de validar cadena y valido que el valor del parametro n sea un numero con la validacion de numeros   */

function cortarCadena(string, n = undefined) {
  let cadena = new String(string);
  return console.log(validarCadena(cadena.substr(0, validarNumero(n))));
}
/* Ejercicio numero 3: Arreglo en cadena, inicializo el parametro separador como " ", se valida la cadena, el usuario puede ingresar cualquier valor para el parametro separador */

function cadenaArreglo(string, separator = " ") {
  let cadena = new String(string);
  return console.log(validarCadena(cadena.split(separator)));
}

function repetirCadena(string, n) {
  let cadena = new String(string + " ");
  return console.log(validarCadena(cadena.repeat(validarNumero(n))));
}

export const texto = {
  numeroCaracteres,
  cortarCadena,
  cadenaArreglo,
  repetirCadena,
};
