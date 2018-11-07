const express =  require('express');
const bodyParser = require('body-parser');
const FBMessenger = require('fb-messenger');
const axios = require('axios');
const app = express();
const URL_GIPHY = 'http://api.giphy.com/v1/gifs/search?q=cats&api_key=OPZmfh9afpJNRJ2EH4UPAwq3PsVnhP03'
const PORT = 3000

const FACEBOOK = {
    access_token:'EAAKZAgZBXnvBkBAHcBsHB4ZBYWDhwUc2mYOz2OqtBoTrqMgA0z8dZBJfkZC7zMOyaLY8XlN4uBc8zRUSbcqZBgqZC6JVZBCm0l5UX2IJuZBgsa9rflRZBtDnyWDGh9yNquqA7RAFPO0bIfaZCZCZBxKzMyaiIrLU6SqPcRJ17y0DObKs2hosdotqbBXNw',
    verify_token:'michatbotxd'
}

const messenger = new FBMessenger()

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/',(req,res) => {
    res.send({message:'ok'})
});

//Este get es para que FB valide nuestro webhook y lo de de alta
app.get('/webhook/chatbot',(req,res ) => {
    if (req.query['hub.mode'] === 'subscribe' &&
        req.query['hub.verify_token'] === FACEBOOK.verify_token) {
        console.log("Validating webhook");
        res.status(200).send(req.query['hub.challenge']);
    } else {
        console.error("Failed validation. Make sure the validation tokens match.");
        res.sendStatus(403);          
    }
});

app.post('/webhook/chatbot',(req,res ) => {
    console.log('mensaje: ',req.body.entry[0].messaging[0].message.text);
    console.log('sender id: ',req.body.entry[0].messaging[0].sender.id);
    console.log(req.body);
    const senderId = req.body.entry[0].messaging[0].sender.id
    axios.get(URL_GIPHY)
        .then(response => {
            messenger.sendImageMessage({
                id:senderId,
                url: response.data.data[0].images.fixed_height.url,
                notificationType:'REGULAR',
                token:FACEBOOK.access_token
            })          
        })
        .catch(err => console.log(err))
    
        messenger.sendTextMessage(
        {   id:senderId,
            text:'Quiubo',
            notificationType:'REGULAR',
            token:FACEBOOK.access_token
        });
    res.send({message:'Ok'})
});

app.listen(PORT,()=>{
    console.log(`Server on ${PORT}`)
});