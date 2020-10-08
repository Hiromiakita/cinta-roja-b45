let numeroMayorA5 = new Promise( (resolve, reject) => {

    //generamos un número aleatorio del 1 al 10
    let numero = Math.floor( Math.random() * 10 );
    console.log(numero);

    //ejecutar en proceso después de que pasen 3 segundos
    setTimeout( () => {
        if (numero > 5) {
            //resolve se ejecuta cuando la promesa se cumple
            resolve(numero);
        } else {
            //reject se ejecuta cuando la promesa no se cumple
            reject('El numero no fue mayor que 5');
        }
    }, 10000)
} );

numeroMayorA5
    .then(numero => console.log('El número generado fue:', numero))
    .catch(mensaje => console.log(mensaje));

//El flujo del programa sigue aunque haya una promesa pendiente de resolver
console.log('hola');
console.log('hola 2');
console.log('hola 3');