// 1.- Crear una función de orden superior que reciba como
//     argumento una variable de cualquier tipo y un callback. 
// La función de orden superior debe retornar como resultado, 
// mediante el callback, cual es el tipo de dato de la variable ingresada e 
// imprimir su contenido.

// let superior = (variable, funcion) => {
//     funcion(variable)
// }

// let callback = (variable) => {
//     console.log(typeof variable);
// }

//Con retornos
let superior = (variable, funcion) => {
    return funcion(variable)
}

let callback = (variable) => {
    return variable, typeof variable;
}

//Pasamos el callback en una variable
// console.log(superior('hola', callback))

//Creamos el callback dentro del argumento de la función superior
// superior('hola', (variable) => {
//     console.log(variable, typeof variable);
// });

// 2.- Crear una función de orden superior que reciba como 
//     argumentos dos números y un callback. Según el callback
//     que se pase a la función, se devuelve la suma de los
//     dos números, la resta de los dos números o la
//     multiplicación de los dos números.

let operacion = (numero1, numero2, callback) => {
    return callback(numero1, numero2);
}

let sumar = (numero1, numero2) => {
    return 'Resultado de la suma:', numero1 + numero2;
}

let restar = (numero1, numero2) => {
    return 'Resultado de la resta:', numero1 - numero2;
}

let multiplicar = (numero1, numero2) => {
    return 'Resultado de la multiplicación:', numero1 * numero2;
}

console.log(operacion(10, 5, multiplicar));



// 3.- Escribe una función de orden superior que reciba una cadena de
//     caracteres y debe devolver, mediante un callback, la
//     cadena de caracteres en mayúsculas o en minúsculas.
//             ordenSuperior("PejeLagarto", minus);
//             -> pejelagarto
//             ordenSuperior("PejeLagarto", mayus);
//             -> PEJELARTO

let ordenSuperior = (texto, funcion) => {
    funcion(texto);
}

ordenSuperior('hhhOollLla', texto => console.log(texto.toUpperCase()));

ordenSuperior('hhhOollLla', texto => console.log(texto.toLowerCase()));


// 4.- Hacer un arreglo de 4 cantidades de tiempo (en minutos)
//     EJEMPLO [120, 80, 200, 100] y tomar solo las cantidades
//     mayores a dos horas (hacer la comparación en horas) 
//     mediante un callback.

