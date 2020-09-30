//FUNCIONES

//JS VANILLA
// function nombreFuncion () {

// }

//Declarando la función
function mostrarMensaje() {
    console.log('un mensaje');
    console.log('un mensaje x2');
}


let saludar = function () {
    console.log('HOlaaaaaaaa');
}

function saludarUsuario(nombreDeUsuario) {
    console.log(`hola ${nombreDeUsuario}`);
}

function sumar(num1, num2) {
    return num1 + num2;
}

//1.- Hacer una función que convierta de grados centígrados a Fahrenheit

function convertirAFarenheit(centigrados) {
    return (centigrados * 9 / 5) + 32;
}


// 5. - Leer el nombre y sueldo de 8 empleados y mostrar el nombre y sueldo del empleado
//  que más gana (Ojo, puedes hacer el ejercicio leyendo los nombres y sueldos desde prompt  
// o escribiendo un arreglo que contenga los nombres y sueldos de cada empleado. Es tu decisión 
//diseñar cómo organizar los datos para hacer las comparaciones necesarias para determinar 
// quién es el empleado con mayor sueldo)



function determinarQuienGanaMas(informacionEmpleados) {
    let sueldoMayor = 0;
    let ganador = '';
    for(let i = 0; i < informacionEmpleados.length; i++) {
        if(informacionEmpleados[i].sueldo > sueldoMayor) {
            ganador = informacionEmpleados[i].nombre;
            sueldoMayor = informacionEmpleados[i].sueldo;
        } else {
            ganador = ganador;
        }
    }
    return `El que gana más es ${ganador}: ${sueldoMayor}`;
}

//6.- Guardar en un array los 20 primeros números pares

//10.- Escribe una función que halle el máximo entre dos números 

//11.- Escribe una función que halle el máximo entre tres números

//12.- Escribe una función que devuelva si un número es negativo, positivo o cero

//Mandar llamar una función
//a través de su nombre y con paréntesis
// mostrarMensaje();
// saludar();
// saludarUsuario('Ricardo');
// saludarUsuario('Víctor');
//Muestro el valor del retorno
// console.log(sumar(10, 20));

//Muestro el valor del retorno guardándolo en una variable
// let resultadoSuma = sumar(100, 500);
// console.log(resultadoSuma);

// console.log(convertirAFarenheit(0));
// console.log(convertirAFarenheit(100));
// let gradosFarenheit = convertirAFarenheit(50);
// console.log(gradosFarenheit);

let informacion = [
    {
        nombre: 'Marco', 
        sueldo: 1000
    }, 
    {
        nombre: 'Diana', 
        sueldo: 40000
    }, 
    {
        nombre: 'Ana', 
        sueldo: 6000000
    }, 
    {
        nombre: 'Daniel', 
        sueldo: 10000
    }
];


// for(let i = 0; i < informacion.length; i++) {
//     console.log(`nombre del empleado: ${informacion[i].nombre}, sueldo: ${informacion[i].sueldo}`);
// }

// console.log(determinarQuienGanaMas(informacion));




//JS ECMA 6
//Funciones flecha
//Son funciones anónimas (las guardamos en una variable)
//reemplazamos la palabra function por una flecha
// () => {}

//la llaves y el ruturn se pueden omitir cuando la función sólo retorna algo
//Se pueden omitir los parénteis de los argumentos cuando sólo tenemos un parámetro

let mostrarMensaje2 = () => {
    console.log('un mensaje en arrow function');
    console.log('un mensaje x2');
}

mostrarMensaje2();

let saludar2 = () => {
    console.log('hola desde una función flecha');
}

saludar2();

let saludarUsuario2 = (nombreDeUsuario) => {
    console.log(`hola ${nombreDeUsuario}`);
}

saludarUsuario2('Hiromi');

// let sumar2 = (num1, num2) => {
//     return num1 + num2;
// }

let sumar2 = (num1, num2) => num1 + num2;


console.log(sumar2(100, 200));

// let convertirAFarenheit2 = (centigrados) => {
//     return (centigrados * 9 / 5) + 32;
// }

let convertirAFarenheit2 = centigrados => (centigrados * 9 / 5) + 32;


console.log(convertirAFarenheit2(0));

let determinarQuienGanaMas2 = informacionEmpleados => {
    let sueldoMayor = 0;
    let ganador = '';
    for(let i = 0; i < informacionEmpleados.length; i++) {
        if(informacionEmpleados[i].sueldo > sueldoMayor) {
            ganador = informacionEmpleados[i].nombre;
            sueldoMayor = informacionEmpleados[i].sueldo;
        } else {
            ganador = ganador;
        }
    }
    return `El que gana más es ${ganador}: ${sueldoMayor}`;
}

console.log(determinarQuienGanaMas2(informacion));

//tres formas para delcarar la misma función

function elevarAlCuadrado (numero) {
    return console.log(numero * numero);
}

let elevarAlCuadrado2 = (numero) => {
    return console.log(numero * numero);
};

let elevarAlCuadrado3 = numero => console.log(numero * numero);

elevarAlCuadrado(2);