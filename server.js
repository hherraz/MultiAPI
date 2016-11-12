'use strict'

const express = require('express');
const bodyParse = require('body-parser'); //MIDLEWARE
const mongoose = require('mongoose');

const PORT = process.env.PORT || 3000;


var app = express();

app.use(bodyParse.urlencoded({ extended: false }));
app.use(bodyParse.json());


//Obtener ticket
app.get('/api/ticket', (req, res) => {
    res.status(200).send({ ticket: [] })
});
//ticket por ID
app.get('/api/ticket/:ticketId', (req, res) => {

});

app.post('/api/ticket', (req, res) => {
    console.log(req.body);
    res.status(200).send({ message: 'El ticket se ha recibido' });
});

app.put('/api/ticket/:ticketId', (req, res) => {

});

app.delete('/api/ticket/:ticketId', (req, res) => {

});

mongoose.connect('mongodb://localhost:27017/cine', (err, res) => {
    if (err) {
        return console.log('Error al conectar a la base de datos'+ err);
    }
    console.log('Conexion con BD establecida');
    
    app.listen(PORT, () => {
        console.log('API RESTfull del cine corriendo en puerto ' + PORT);
    });
});
