// packages
const fs = require('fs');
const path = require('path');
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const axios = require('axios');
const morgan = require('morgan');
const bodyParser = require("body-parser");

// create the application
var app = express();

// connect to mongo database
let configDB = require('./config/db.js');
mongoose.connect(configDB.url);
mongoose.connection.on('open', () => {
  console.log('Database connection established.');
});
mongoose.connection.on('error', (err) => {
  console.log(err);
});

// view engine
app.set('view engine', 'html');
app.engine('html', (path, options, callbacks) => {
  fs.readFile(path, 'utf-8', callback);
});

// middlewares //
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '../client/dist')));

//routes //
require('./config/routes')(app);

// ERROR HANDLER //
app.use((err, req, res, next) => {
  res.status(err.status || 500);
});

module.exports = app;