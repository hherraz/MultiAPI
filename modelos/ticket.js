'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var Pelicula = mongoose.model('Pelicula');

var TicketEsquema = Schema({
    qr: String,
    precio: { type: Number, default: 0 },
    fecha_operacion: { type: Date, default: Date.now },
    pelicula: { type: Schema.ObjectId, ref: "Pelicula" },
    fecha_funcion: Date,
    hora_funcion: String
});

module.exports = mongoose.model('Ticket', TicketEsquema);