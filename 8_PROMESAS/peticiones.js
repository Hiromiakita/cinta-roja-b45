const request = require('request');

// let obtenerPersonaje = (idPersonaje) => {
//     const URL_BASE = 'https://swapi.dev/api/people/';

//     return new Promise( (resolve, reject) => {

//         request(`${URL_BASE}${idPersonaje}`, (error, respuesta, body) => {
//             if(respuesta.statusCode === 200) {
//                 let infoPersonaje = JSON.parse(body);
//                 resolve(infoPersonaje);
//             } else {
//                 reject('NO SE ENCONTRARÓ EL PERSONAJE');
//             }
//         } )
//     })
// };

// obtenerPersonaje(1)
//     .then(personaje => console.log(personaje.hair_color))
//     .catch(error => console.log(error));

// obtenerPersonaje(1)
//     .then(personaje => {
//         console.log(personaje.hair_color);
//         console.log(personaje.name)
//     })
//     .catch(error => console.log(error));


// let hola = obtenerPersonaje(10);


// hola
//     .then(personaje => console.log(personaje.hair_color))
//     .catch(error => console.log(error));



let obtenerPersonajes = () => {
    const URL = 'https://swapi.dev/api/people/';

    return new Promise( (resolve, reject) => {

        request(URL, (error, respuesta, body) => {
            respuesta.statusCode === 200 
            ? resolve(body) 
            : reject(':C');

            // if (respuesta.statusCode === 200) {
            //     resolve(body) 
            // } else {
            //     reject('ERROR')
            // };
        })
    } )
}

// obtenerPersonajes()
//     .then(body => {
//         let infoPersonajes = JSON.parse(body);
//         console.log(infoPersonajes);
//     })
//     .catch(carita => console.log(carita));






    let obtenerPersonaje = (idPersonaje) => {
        const URL_BASE = 'https://swapi.dev/api/people/';
    
        return new Promise( (resolve, reject) => {

            request( `${URL_BASE}${idPersonaje}`, (error, respuesta, body) => {

                respuesta.statusCode === 200 
                ? resolve(body) 
                : reject('No encontramos al personaje');

            })
        })
    };


    obtenerPersonaje(10).then(body => {
        let infoPersonaje = JSON.parse(body);
        console.log(infoPersonaje.name);
        let endpoints = infoPersonaje.films;

        endpoints.forEach(endpoint_film => {
            request(endpoint_film, (error, respuesta, body) => {
                if (respuesta.statusCode === 200) {
                    let infoPelicula = JSON.parse(body);
                    console.log(infoPelicula.title);
                } else {
                    console.log('no hay películas');
                }
            })
        })

    }).catch(err => console.log(err));