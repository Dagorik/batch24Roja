//Importa la biblioteca "request"
const request = require('request');

function getMovieForIdUser(idUser){
    request.get(`https://swapi.co/api/people/${idUser}`
        ,(err,response,body) => {
            if (response.statusCode === 200){
                const json = JSON.parse(body);
                console.log(json.name)
                const urlMovie = json.films[0]
                request.get(urlMovie,(err,response,body)=>{
                    const json2 = JSON.parse(body);
                    console.log(json2.title)
                })
            }else{
                console.log('Peticion incorrecta :(')
            }
        })  
}

getMovieForIdUser(3)