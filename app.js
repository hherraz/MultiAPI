'use strict'

const express = require('express');
const bodyParse = require('body-parser'); //MIDLEWARE
const controladorTicket = require('./controladores/ticket')
var app = express();

app.use(bodyParse.urlencoded({ extended: false }));
app.use(bodyParse.json());


//Obtener ticket
app.get('/api/ticket', controladorTicket.obtenerTodos);
//ticket por ID
app.get('/api/ticket/:ticketId', controladorTicket.obtenerTicket);
//Permite crear un nuevo Ticket
app.post('/api/ticket', controladorTicket.guardarTicket);
//Permite modificar un ticket
app.put('/api/ticket/:ticketId', controladorTicket.actualizarTicket);
//Elimina un ticket
app.delete('/api/ticket/:ticketId', controladorTicket.eliminarTicket);



module.exports = app;
habi