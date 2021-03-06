const request = require('request');

// 1.- Hacer una petición a cualquier pokemon y mostrar sus tipos.
//                     https://pokeapi.co/

let obtenerPokemon = (id) => {
    const URL_BASE = 'https://pokeapi.co/api/v2/pokemon/';

    request(`${URL_BASE}${id}`, (err, res, body) => {
        if(res.statusCode === 200) {
            const infoPokemon = JSON.parse(body);
            const tipos = infoPokemon.types;
            const tiposNombres = tipos.map(tipo => tipo.type.name );
            console.log(tiposNombres);
        } else {
            console.log('ERROR, status code: ', res.statusCode);
        }
    })
}

// obtenerPokemon(8);


// 2.- Hacer una funcion que haga una petición 
//     (Ejemplo: peticionLibro("i robot");
//     Buscar un libro y traer el o los autores del primer libro
//     http://openlibrary.org/search.json?q=i+robot) 

let traerAutor = (nombreLibro) => {

    const URL_BASE = 'http://openlibrary.org/search.json?q=';

    request(`${URL_BASE}${nombreLibro}`, (error, respuesta, body) => {
        if(respuesta.statusCode === 200) {
            let resultados = JSON.parse(body);
            console.log('Autores resultado 1', resultados.docs[0].author_name);
        } else {
            console.log('No se encontraron resultados');
        }
    })
}


// traerAutor('El principito');
// traerAutor('i robot');
// traerAutor('don quijote');
// traerAutor('la biblia');

// 3.- Hacer una petición por autor y devolver la lista de 
//     sus libros
//         http://openlibrary.org/search.json?author=asimov

let traerLibros = (autor) => {

    const URL_BASE = 'http://openlibrary.org/search.json?author=';

    request(`${URL_BASE}${autor}`, (error, respuesta, body) => {
        let resultados = JSON.parse(body);
        let nombresLibros = resultados.docs.map(libro => {
            return libro.title;
        })

        console.log('nombres libros',nombresLibros);
    })
}

// traerLibros('asimov');

// 4.- Hacer una petición y devolver el género de la banda deseada
//     http://www.theaudiodb.com/api/v1/json/1/search.php?s=muse

let traerGenero = (banda) => {
    const URL_BASE = 'http://www.theaudiodb.com/api/v1/json/1/search.php?s=';

    request(`${URL_BASE}${banda}`, (err, res, body) => {
        if(res.statusCode === 200) {
            let resultados = JSON.parse(body);
            console.log(resultados.artists);
        } else {
            console.log('error en la búsqueda');
        }
    })
}

// traerGenero('shakira');


// 5.- Hacer una petición a la swapi a un personaje y obtener 
//     su primera película
//
//                     https://swapi.co/

let traerPrimerPelicula = (idPersonaje) => {
    const URL_BASE = 'https://swapi.dev/api/people/';

    request(`${URL_BASE}${idPersonaje}`, (error, respuesta, body) => {
        if(respuesta.statusCode === 200) {
            let personajeInfo = JSON.parse(body);
            console.log(personajeInfo.name);

            request(personajeInfo.films[0], (error2, respuesta2, body2) => {
                let infoPelicula1 = JSON.parse(body2);
                console.log(infoPelicula1.title);
        })
        } else { 
            console.log('ERROR, status code: ', respuesta.statusCode)
        }
    })
}

// traerPrimerPelicula(1);

// 6.- Hacer una petición a la swapi a un personaje y obtener 
//     sus primera películas
//
//                     https://swapi.co/

let traerPeliculas = (idPersonaje) => {

    const URL_BASE = 'https://swapi.dev/api/people/';

    request(`${URL_BASE}${idPersonaje}`, (err, res, body) => {
        let personaje = JSON.parse(body);
        console.log(personaje.name);

        personaje.films.forEach(film => {
            request(film, (error, respuesta, bodyFilm) => {
                let infoPelicula = JSON.parse(bodyFilm);
                console.log('Película: ',infoPelicula.title);
            })
        })
    })
}

// traerPeliculas(20);
// traerPeliculas(1);

// 7.- Hacer una petición a la swapi a una película y obtener 
//     sus personajes
//
//                     https://swapi.co/
const traerPersonajesPelicula = (idPelicula) => {
    const URL_BASE = 'http://swapi.dev/api/films/';

    request(`${URL_BASE}${idPelicula}`, (error, respuesta, body) => {

        if ( respuesta.statusCode === 200 ) {

            let infoPelicula = JSON.parse(body);
            console.log('Película', infoPelicula.title);
            // array.forEach(elemento => {
            //     manipulamos el elemento
            // })

            infoPelicula.characters.forEach(URL_PERSONAJE => {
                request(URL_PERSONAJE, (error2, respuesta2, body2) => {
                    let infoPersonaje = JSON.parse(body2);
                    console.log('Personaje:', infoPersonaje.name);
                })
            })

        } else {
            console.log('ERROR, status code:', respuesta.statusCode);
        }

    })
}

// traerPersonajesPelicula(1);


// 8.- Hacer una petición a la swapi a un planeta y obtener 
//     los nombres de los habitantes
//
//                     http://swapi.dev/api/planets/1/


let obtenerHabitantes = (idPlaneta) => {
    const URL_BASE = 'http://swapi.dev/api/planets/';

    request(`${URL_BASE}${idPlaneta}`, (error, respuesta, body) => {
        if ( respuesta.statusCode === 200 ) {

            let infoPlaneta = JSON.parse(body);
            console.log('Nombre del planeta: ', infoPlaneta.name);

            if(infoPlaneta.residents) {
                infoPlaneta.residents.forEach(URL_HABITANTE => {
                    request(URL_HABITANTE, (error, respuesta, body) => {
                        let infoHabitante = JSON.parse(body);
                        console.log('Habitante', infoHabitante.name);
                    })
                })
            } else {
                console.log('No hay habitantes');
            }
            
        } else {
            console.log('ERROR, no existe el planeta consultado')
        }
    })
}

// obtenerHabitantes(200);


// 9.- Hacer una petición a la pokeapi a un pokemon y obtener 
//     sus habilidades
//
//                     https://pokeapi.co/api/v2/pokemon/1


let obtenerHabilidadesPokemon = (idPokemon) => {

    const URL_BASE = 'https://pokeapi.co/api/v2/pokemon/';

    request(`${URL_BASE}${idPokemon}`, (error, respuesta, body) => {
        if (respuesta.statusCode === 200) {
            let infoPokemon = JSON.parse(body);
            console.log('pokemon name:', infoPokemon.name);

            infoPokemon.abilities.forEach(habilidad => {
                console.log('habilidad:', habilidad.ability.name);
            })

        } else {
            console.log('ERROR');
        }

    })
}

// obtenerHabilidadesPokemon(200);


// 10.- Hacer una petición a la pokeapi a un pokemon y obtener 
//     el área en donde lo encuentras
//
//                     https://pokeapi.co/api/v2/pokemon/1


let encontrarAreaDelPokemon = (idPokemon) => {
    const URL_BASE = 'https://pokeapi.co/api/v2/pokemon/1';

    request(`${URL_BASE}${idPokemon}`, (error, respuesta, body) => {
        if (respuesta.statusCode === 200) {
            let infoPokemon = JSON.parse(body);
            console.log('nombre pokemon:',infoPokemon.name);

            let URL_LOCATION = infoPokemon.location_area_encounters;

            request(URL_LOCATION, (error, respuesta, body) => {
                let infoLocation = JSON.parse(body);
                console.log('lo puedes encontrar en:',infoLocation[0].location_area.name);
            })



        } else {
            console.log('ERROR');
        }

    })
}

encontrarAreaDelPokemon(1);


// 11.- Devolver los asteroides que sean potencialmente peligrosos
//     para la tierra de la semana pasada hasta el día de ayer.
//                     https://api.nasa.gov/

let obtenerAsteroides = () => {
    const URL_BASE = 'https://api.nasa.gov/neo/rest/v1/feed?start_date=2018-11-18&end_date=2018-11-21&api_key=cDwpLgEBWZfbvThy0SAYpKqWX5W5DKmMrNEbdo2O';

    request(URL_BASE, (error, respuesta, body) => {
        if (respuesta.statusCode === 200) {
            let info = JSON.parse(body);
            console.log('nombre:',info.near_earth_objects['2018-11-18'][0]);
        } else {
            console.log('ERROR');
        }
    })
}
obtenerAsteroides();

// 12.- Traer los primeros 151 pokemon de la primera generacion y 
//     devolver un arreglo de objetos con el nombre, sus moves, tipos, tamaño 
//     y peso.
//                       https://pokeapi.co/



// let arreglo = ['hola'];

// console.log(arreglo[0]);