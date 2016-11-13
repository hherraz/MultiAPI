'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var Pelicula = mongoose.model('Pelicula');

var TicketEsquema = Schema({
    nombre: String,
    qr: String,
    precio: { type: Number, default: 0 },
    pelicula: { type: Schema.ObjectId, ref: "Pelicula" },
    fecha_funcion: Date,
    hora_funcion: String
});

mongoose.model('Ticket', TicketEsquema);