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
        res.sendFile('login.html',{root: __dirname +'/publica/'});
    }),

    module.exports = app;
