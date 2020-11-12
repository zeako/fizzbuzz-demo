var express = require('express');
var logger = require('morgan');

var fizzbuzzRouter = require('./routes/fizzbuzz');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/fizzbuzz', fizzbuzzRouter)

module.exports = app;
