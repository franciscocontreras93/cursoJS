function numeroCaracteres(string="") {
let cadena = new String(string)
let noSpace = cadena.replace()
let validation = (cadena == null || cadena.length == 0 || /^\s+$/.test(cadena)) 
? console.warn("Cadena Vacia")
: console.info(`Num. Caracteres: ${cadena.length}`)

}

function cortarCadena(string, n=undefined) {
    let cadena = new String(string)
    let i = null
    let valNum = (n == null || isNaN(n) || /^[a-zA-Z]$/.test(n) || n > cadena.length)
    ? console.warn(`Segundo parametro debe ser igual o mayor a ${cadena.length}`)
    : i = n
    let valString = (cadena == null || cadena.length == 0 || /^\s+$/.test(cadena))
    ?console.warn("Cadena Vacia") 
    :console.info(cadena.substr(0,n))
}

function cadenaArreglo(string="", separator=" ") {
    let cadena = new String(string)
    let i = undefined
    let valSym = (separator == null) 
    ?console.warn(`el separador no puede ser Nulo`)
    :i = separator
    let valString = (cadena == null || cadena.length == 0 || /^\s+$/.test(cadena)) 
    ?console.warn("Cadena Vacia") 
    :console.info(cadena.split(i))
    
    
}

function repetirCadena(string,n){
    let cadena = new String(string + " ")
    let i = null
    let valNum = (n == null || isNaN(n)) 
    ?console.warn("Segundo Parametro debe ser un numero") 
    :i = n

    let valString = (cadena == null || cadena.length == 0 || /^\s+$/.test(cadena)) 
    ?console.warn("Cadena Vacia") 
    :console.info(cadena.repeat(i))
}


export const texto = {
    numeroCaracteres,
    cortarCadena,
    cadenaArreglo,
    repetirCadena
}