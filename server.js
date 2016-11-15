'use strict'

const express = require('express');
const bodyParse = require('body-parser'); //MIDLEWARE
const mongoose = require('mongoose');

const PORT = process.env.PORT || 3000;

const controladorTicket = require('./controller/ticket')

var app = express();

app.use(bodyParse.urlencoded({ extended: false }));
app.use(bodyParse.json());


//Obtener ticket
app.get('/api/ticket', controladorTicket.obtenerTodos);
//ticket por ID
app.get('/api/ticket/:ticketId', controladorTicket.obtenerTicket);
//Permite crear un nuevo Ticket
app.post('/api/ticket', contraladorTicket.guardarTicket);
//Permite modificar un ticket
app.put('/api/ticket/:ticketId', controladorTicket.actualizarTicket);
//Elimina un ticket
app.delete('/api/ticket/:ticketId', controladorTicket.eliminarTicket);


mongoose.connect('mongodb://localhost:27017/cine', (err, res) => {
    if (err) {
        return console.log('Error al conectar a la base de datos' + err);
    }
    console.log('Conexion con BD establecida');

    app.listen(PORT, () => {
        console.log('API RESTfull del cine corriendo en puerto ' + PORT);
    });
});