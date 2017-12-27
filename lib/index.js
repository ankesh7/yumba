"use strict";

require("babel-core/register");
require("babel-polyfill");
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var urlencodedParser = bodyParser.urlencoded({
    extended: false
});
var scrape = require('./scrape');

app.get('/', function (req, res) {
    scrape().then(function (value) {
        res.send({
            data: value
        });
    });
});

app.listen(5000, function () {
    return console.log('Example app listening on port 5000!');
});