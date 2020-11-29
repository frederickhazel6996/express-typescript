"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
var app = express();
/* GET home page. */
app.get('/', function (req, res, next) {
    res.status(200).send("I work Lmaoo");
});
exports.default = app;
