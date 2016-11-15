'use strict'
var peli = require('./modelos/pelicula');
var Ticket = require('./modelos/ticket');

/* Funcion que obtiene un ticket por id */
function obtenerTicket(req, res) {
    let ticketId = req.params.ticketId;
    Ticket.findById(ticketId, (err, ticket) => {
        if (err) return res.status(500).send({ message: 'Erro al enviar la peticion: ' + err });
        if (!ticket) return res.status(404).send({ message: 'El producto no existe' });

        res.status(200).send({ ticket: ticket });
    });
};

/* Funcion que obtiene todos los tickets */
function obtnerTodos(req, res) {
    Ticket.find({}, (err, ticket) => {
        if (err) return res.status(500).send({ message: 'Error al enviar la peticion: ' + err });
        if (!ticket) return res.status(404).send({ message: 'No Hay tickets en la BD no existe' });
        res.status(200).send({ ticket })
    });
}
/* Funcion que crea un nuevo ticket */
function guardarTicket(req, res) {
    console.log('POST /api/ticket');
    console.log(req.body);

    let ticket = new Ticket();
    ticket.qr = req.body.qr;
    ticket.precio = req.body.precio;
    ticket.pelicula = req.body.pelicula;
    ticket.fecha_funcion = req.body.fecha_funcion;
    ticket.hora_funcion = req.body.hora_funcion;

    ticket.save((err, ticketGuardado) => {
        if (err) res.status(500).send({ message: 'Error al guardar el ticket en BD: ' + err });

        res.status(200).send({ ticket: ticketGuardado });
    });
};

/* Funcion que actualiza un ticket */
function actualizarTicket(req,res) {
    let ticketId = req.params.ticketId;
    let update = req.body;

    Ticket.findByIdAndUpdate(ticketId, update, (err, ticketUpdate) => {
        if (err) return res.status(500).send({ message: `Error al actualizar el ticket: ${err}` });
        res.status(200).send({ message: 'El ticket se ha actualizado' });
    });
};

/* Funcion que elimina de la BD un ticket */
function eliminarTicket(req,res) {
        let ticketId = req.params.ticketId
    Ticket.findById(ticketId, (err, ticket) => {
        if (err) return res.status(500).send({ message: `Error al Borrar el ticket: ${err}` });

        ticket.remove(err => {
            if (err) return res.status(500).send({ message: `Error al Borrar el ticket: ${err}` });
            res.status(200).send({ message: 'El ticket se ha eliminado' });
        });
    });
};


exports = {
    obtenerTicket,
    obtnerTodos,
    guardarTicket,
    actualizarTicket,
    eliminarTicket
}