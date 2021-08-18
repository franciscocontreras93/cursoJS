function sumar(a, b, ...c) {
  let resultado = a + b;

  c.forEach(function (n) {
    resultado += n;
  });

  return resultado;
}

function restar(a, b, ...c) {
    let resultado = a - b;

    c.forEach(function (n) {
        resultado -= n;
    });

    return resultado;
}

function circleArea(radio){

    let area = Math.PI * Math.pow(radio,2)
    return area
}


export const aritmetica  = {
    sumar,
    restar,
    circleArea
}
