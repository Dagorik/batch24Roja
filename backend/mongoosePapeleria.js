const mongoose = require('mongoose')
const URL = 'mongodb://prueba:d1234567890@ds259079.mlab.com:59079/cinta-roja'

mongoose.connect(URL,{useNewUrlParser:true},()=>{
    console.log('Conexion exitosa a la base de datos');  
})

const Schema = mongoose.Schema;
const ObjectID = mongoose.Schema.ObjectID

const articuloSchema = new Schema({
    nombre:String,
    precio:Number,
    cantidad:Number
});

const ticketSchema = new Schema({
    fecha:Date,
    articulos:[articuloSchema],
    total:Number,
    iva:Number,
    totalIva:Number
});

const Papeleria = mongoose.model('Papeleria',articuloSchema);
const Tickets = mongoose.model('Tickets',ticketSchema);

module.exports = {Papeleria,Tickets}