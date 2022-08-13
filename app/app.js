const express = require('express');
const router = require('../routes/router');

const app = express();
//serve up static content
app.use(express.static('public'));
app.use(express.static('views'));

app.use('/', router);

module.exports = app;