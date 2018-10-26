const express = require('express');
const bodyParser = require('body-parser');

const app = express();
//Configurar body parser para aceptar body
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

//Petición simple
app.get('/',(req,res)=>{
    res.send({message:'peticion get al index'});
});

//Petición con params
app.get('/users/:uid',(req,res)=>{
    console.log(req.params)
    const uid = req.params.uid
    const user = {id:1,name:'Juan',last_name:'Perz',age:30,is_alive:true}
    if (uid === "1"){
        res.send(user)
    }else{
        res.status(404).send({message:'User not found'})
    }
});

//Peticion con querys
app.get('/busqueda',(req,res)=>{
    const {search,color} = req.query
    res.send({message:`El ${search} es color ${color}`});
});

app.post('/user/create',(req,res)=>{
     console.log(req.body);
     const {name,last_name} = req.body
     const newUser = {
         id:1,
         name,
         last_name
     }
     res.status(201).send({user:newUser,message:'Nuevo usuario creado'})
});


app.listen(3000,()=>{
    console.log('Server on port 3000')
});