'use strict';

var express = require('express');
var path = require('path');
var colors = require('colors');
var morgan = require('morgan');
var skipper = require('skipper');

var app = express();

//app.use(express.static(__dirname + '/dist'));

app.use(morgan('dev'));
//app.use(passport.initialize())
app.use(skipper());
app.use(express.static('bower_components'));
app.use(express.static('components'));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '/index.html'));
});

app.listen(9005, function () {
	  console.log('Listening on localhost:9005'.rainbow);
});
