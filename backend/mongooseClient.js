const mongoose = require('mongoose');
const URL = 'mongodb://prueba:d1234567890@ds259079.mlab.com:59079/cinta-roja'
mongoose.connect(URL,{useNewUrlParser:true},()=>{
    console.log('Conexión exitosa con la base de datos carnal')
});

const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.ObjectId;

const peliSchema = new Schema({
    pelicula:ObjectId,
    titulo:String,
    ano:Number,
    descripcion:{type:String},
    portadas:[String],
    genero:{
        type:String,
        enum:['comedia','drama','terror'],
        require: 'Tiene que ser un genero obligatorio'
    },
    director:{
        type:String,
        default:'Raul Amador'
    }
});

const Pelicula = mongoose.model('Pelicula',peliSchema);

module.exports = {Pelicula}