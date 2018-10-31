const express = require('express')
const bodyParser = require('body-parser')
const {Papeleria,Tickets} = require('./mongoosePapeleria');
const PORT = 3000

const app = express()

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

app.post('/api/Papeleria/Compra',(req,res)=>{
    const {fecha,articulos} = req.body
    const nuevaCompra = Tickets({
        fecha,
        articulos
    });
    nuevaCompra.save((err,compra) =>{
        err
        ? res.status(409).send(err)
        : res.send(compra)
    })
})

app.listen(PORT,()=>{
    console.log(`Server on port ${PORT}`)
})