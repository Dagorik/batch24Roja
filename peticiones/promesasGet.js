const request = require('request');

function getName(idPeople){
    return new Promise((resolve,reject )=>{
            request.get(`https://swapi.co/api/people/${idPeople}`,(err,response,body) => {
            const json = JSON.parse(body)
            response.statusCode === 200
                ? resolve(json)
                : reject('Error en getName')
        });
    });
}

function getMovieNameByUrl(urlMovie){
    return new Promise((resolve,reject)=>{
        request.get(urlMovie,(err,response,body)=>{
            const json = JSON.parse(body)
            response.statusCode === 200
            ? resolve(json)
            : reject('Error en getMovieName')
        });
    });
}


getName(2)
    .then(respuesta => {
        console.log(respuesta.name)
        return getMovieNameByUrl(respuesta.films[0])
    })
    .then(film => console.log(film.title))
    .catch(err => console.log(err))