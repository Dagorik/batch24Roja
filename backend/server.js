const express = require('express');
const bodyParser = require('body-parser');
const {Pelicula} = require('./mongooseClient');
const PORT = 3000
const app = express();

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

app.get('/',(req,res)=>{
    res.send({message:'index'});
});

app.post('/api/v1/pelicula',(req,res)=>{
    const {titulo,ano,descripcion,portadas,genero,director} = req.body
    const nuevaPelicula = Pelicula({
        titulo,
        ano,
        descripcion,
        portadas,
        genero,
        director
    });
    nuevaPelicula.save((err,pelicula)=>{
        err 
        ? res.status(409).send(err) 
        : res.status(201).send(pelicula)
    })
});

app.get('/api/v1/pelicula',(req,res)=>{
    Pelicula.find().exec()
        .then(peliculas => res.send(peliculas))
        .catch(err => res.status(409).send(err))
});

app.get('/api/v1/busqueda/pelicula',(req,res) => {
    const {q} = req.query;
    Pelicula.find({ano:q}).exec()
        .then(peliculas => res.send(peliculas))
        .catch(err => res.status(409).send(err))
});

app.put('/api/v1/pelicula/:uid',(req,res)=>{
    const {uid} = req.params
    Pelicula.findByIdAndUpdate(uid,{$set:req.body},{new:true}).exec()
        .then(newPeli => res.send(newPeli))
        .catch(err => res.send(err))

});

app.get('/api/v1/pelicula/:uid',(req,res)=>{
    const {uid} = req.params
    Pelicula.findById(uid).exec()
        .then(pelicula => {
            pelicula
            ? res.status(200).send(pelicula)
            : res.status(404).send({message:'Pelicula no encontrada'})
        }).catch(err => {
            res.status(409).send(err)
        })
});

app.listen(PORT,()=>{
    console.log(`Server on port ${PORT}`)
});