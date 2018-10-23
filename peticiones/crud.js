const request = require('request');
const URL_BASE = "https://goodreads-devf-aaron.herokuapp.com/api/v1/"

function getAllAutores(){
    const URI = "authors/"
    return new Promise((resolve,reject)=>{
        request.get(`${URL_BASE}${URI}`,(err,response,body) => {
            const json = JSON.parse(body);
            response.statusCode === 200
            ? resolve(json)
            : reject('Error')
        });
    });
}

function createAuthor(nombre,apellidos,bio,genero,edad){
    const URI = "authors/"
    const jsonSend = {
        name:nombre,
        last_name:apellidos,
        nacionalidad:"MX",
        biography:bio,
        gender:genero,
        age:edad
    }
    const URL = `${URL_BASE}${URI}`
    return new Promise((resolve,reject)=>{
        request.post({url:URL,form:jsonSend},(err,response,body)=>{
            const json = JSON.parse(body)
            response.statusCode === 201
            ? resolve(json)
            : reject('Error')
        });
    });
}

function updateAuthor(id,name,last_name,biography,gender,age){
    const URI = "authors/"
    const jsonSend = {
        name,
        last_name,
        nacionalidad:"MX",
        biography,
        gender,
        age
    }
    const URL = `${URL_BASE}${URI}${id}/`
    return new Promise((resolve,reject)=>{
        request.put({url:URL,form:jsonSend},(err,response,body)=>{
            const json = JSON.parse(body)
            response.statusCode === 200
            ? resolve(json)
            : reject('Error')
        });
    });
}

updateAuthor(1555,'Prueba','Desde node','Ejeplo de pticion en node','M',38)
    .then(autor =>  console.log(autor))
    .catch(err => console.log(err))

    crearAuthor
    y cuando regrese el id
    modificar autor
    y cuando regrese la peticion
    get autor por id
    imprimir el autor
    