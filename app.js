'use strict'

const express = require('express');
const bodyParse = require('body-parser'); //MIDLEWARE

var app = express();

const api = require('./rutas')

app.use(bodyParse.urlencoded({ extended: false }));
app.use(bodyParse.json());
app.use('/api', api);



module.exports = app;