'use strict'

var Peli = require('../modelos/pelicula');

function verPeliculasEnCartelera(req, res) {
    Peli.find({}, (err, pelicula) => {
        if (err) return res.status(500).send({ message: 'Error al enviar la peticion: ' + err });
        if (!pelicula) return res.status(404).send({ message: 'No Hay peliculas en la BD...no existe' });
        res.status(200).send({ pelicula });
    });
}

function verPelicula(req, res) {
    let peliculaId = req.params.peliculaId;
    Pelicula.findById(peliculaId, (err, pelicula) => {
        if (err) return res.status(500).send({ message: 'Erro al enviar la peticion: ' + err });
        if (!pelicula) return res.status(404).send({ message: 'La pelicula no existe' });

        res.status(200).send({ pelicula: pelicula });
    });
}

function nuevaPelicula(req, res) {
    console.log('POST /api/pelicula');
    console.log(req.body);

    let pelicula = new Pelicula();
    pelicula.nombre = req.body.nombre;
    pelicula.pais_origen = req.body.pais_origen;
    pelicula.descripcion = req.body.descripcion;
    pelicula.caratula = req.body.caratula;


    pelicula.save((err, addPelicula) => {
        if (err) res.status(500).send({ message: 'Error al guardar el ticket en BD: ' + err });

        res.status(200).send({ ticket: ticketGuardado });
    });
}

function modificarPelicula(req, res) {

}

function quitarPelicula(req, res) {

};