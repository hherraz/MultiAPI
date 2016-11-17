'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var peliEsquema = new Schema({
    nombre: String,
    pais_origen: String,
    descripcion: String,
    caratula: String,
    fecha_estreno: Date,
    fecha_salida_cartelera: Date,
    en_cartelera: { type: Boolean, default: true },
    tipo: { type: String, enum: ['Ciencia Ficcion', 'Comedia', 'Romantica', 'Accion', 'Aventuras', 'Infantil', 'Otros'] },
    tipo2: { type: String, enum: ['Ciencia Ficcion', 'Comedia', 'Romantica', 'Accion', 'Aventuras', 'Infantil', 'Otros'] },
    subtipo: { type: String, enum: ['Ciencia Ficcion', 'Comedia', 'Romantica', 'Accion', 'Aventuras', 'Infantil', 'Otros'] }
});

module.exports = mongoose.model('Pelicula', peliEsquema);