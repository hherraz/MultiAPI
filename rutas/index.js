'use strict'

const express = require('express');
const controladorTicket = require('../controladores/ticket')

const api = express.Router();


//Obtener ticket
api.get('/ticket', controladorTicket.obtenerTodos);
//ticket por ID
api.get('/ticket/:ticketId', controladorTicket.obtenerTicket);
//Permite crear un nuevo Ticket
api.post('/ticket', controladorTicket.guardarTicket);
//Permite modificar un ticket
api.put('/ticket/:ticketId', controladorTicket.actualizarTicket);
//Elimina un ticket
api.delete('/ticket/:ticketId', controladorTicket.eliminarTicket);


module.exports = api;