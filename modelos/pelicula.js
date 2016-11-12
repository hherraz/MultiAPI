'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var peliEsquema = new Schema({
    nombre: String,
    pais_origen: String,
    descripcion: String,
    caratula: String,
    fecha_estreno: Date,
    fehca_salida_cartelera: Date,
    tipo: { type: String, enum: ['Ciencia Ficcion', 'Comedia', 'Romantica', 'Accion', 'Aventuras', 'Infantil', 'Otros'] },
    tipo2: { type: String, enum: ['Ciencia Ficcion', 'Comedia', 'Romantica', 'Accion', 'Aventuras', 'Infantil', 'Otros'] },
    subtipo: { type: String, enum: ['Ciencia Ficcion', 'Comedia', 'Romantica', 'Accion', 'Aventuras', 'Infantil', 'Otros'] }
});

mongoose.model('Pelicula', peliEsquema);