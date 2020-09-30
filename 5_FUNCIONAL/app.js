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


//iterar con un for
for(let i = 0; i < informacion.length; i++) {
    console.log(`nombre: ${informacion[i].nombre}, sueldo: ${informacion[i].sueldo}`);
}

//iterar con forEach
//callback(elementoActual, posicion, arreglo completo)
// informacion.forEach(elementoActual => 
//     console.log(`nombre: ${elementoActual.nombre}, sueldo: ${elementoActual.sueldo}`)
// )

let nombres = ['Ana', 'Hiromi', 'Diego', 'Ernesto'];
let edades = [1, 6, 7];

nombres.forEach( (valorActual, posicion, arreglo) => {
    console.log(posicion + 1 , valorActual);
})

edades.forEach((x, y, z) => {
    console.log(x);
})