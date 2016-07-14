'use strict';

var express = require('express');
var skipper = require('skipper');
var colors = require('colors');
var path = require('path');

var app = express();

app.use(skipper());

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(9000, function () {
    console.log('Listening on port 9000...'.green);
});
