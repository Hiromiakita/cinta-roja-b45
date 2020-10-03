const request = require('request');

request('https://swapi.dev/api/people/4', (error, respuesta, body) => {
    let bodyJson = JSON.parse(body);
    // console.log(bodyJson);
    console.log(bodyJson.name);
    console.log(bodyJson.mass);

})