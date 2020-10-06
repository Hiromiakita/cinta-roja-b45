const request = require('request');



let obtenerPersonaje = (id) => {

    //request(URL, callback(error, respuesta, body))
    request(`https://swapi.dev/api/people/${id}`, (error, respuesta, body) => {

        if(respuesta.statusCode === 200) {
            //Body en string
            // console.log(body)
        
            //JSON.parse -> Cambiar formato a JSON para acceder a sus propiedades
            let bodyJson = JSON.parse(body);
            console.log(bodyJson.name);
            console.log(bodyJson.mass);
        } else {
            console.log('ERROR, status code: ', respuesta.statusCode);
        }

    })
};

// //DARTH
// obtenerPersonaje(4);

// //LUCK
// obtenerPersonaje(1);

// //BERU
// obtenerPersonaje(7);

// //OBI
// obtenerPersonaje(10);

//NO EXISTE
// obtenerPersonaje(84);

let obtenerPersonajes = () => {

    request('https://swapi.dev/api/people/', (error, respuesta, body) => {
        console.log('error', error);
        console.log('status code', respuesta.statusCode);

        if (respuesta.statusCode === 200) {
            let info = JSON.parse(body);
            //resultados es un arreglo
            let resultados = info.results;
            // console.log(resultados);

            let nombres = resultados.map(personaje => personaje.name);

            // console.log(nombres);

            let infoImportante = resultados.map(personaje => {
                return { nombre: personaje.name, altura: personaje.height };
            })

            console.log(infoImportante);

            let losMasAltos = infoImportante.filter(personaje => {
                return personaje.altura > 160;
            })

            console.log(losMasAltos);
        } else {
            console.log('error', respuesta.statusCode);
        }

    })
}

// obtenerPersonajes();