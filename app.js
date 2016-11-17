'use strict'

const express = require('express');
const bodyParse = require('body-parser'); //MIDLEWARE

var app = express();

const api = require('./rutas')

app.use(bodyParse.urlencoded({ extended: false }));
app.use(bodyParse.json());
app.use(express.static(__dirname + '/publica'));
app.use('/api', api);

app.get('*', (req, res) => {
        res.sendfile('./publica/login.html');
    }),

    module.exports = app;