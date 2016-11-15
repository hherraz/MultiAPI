'use strict'

const mongoose = require('mongoose');
const app = require('./app');
const PORT = process.env.PORT || 3000;

mongoose.connect('mongodb://localhost:27017/cine', (err, res) => {
    if (err) {
        return console.log('Error al conectar a la base de datos' + err);
    }
    console.log('Conexion con BD establecida');

    app.listen(PORT, () => {
        console.log('API RESTfull del cine corriendo en puerto ' + PORT);
    });
});