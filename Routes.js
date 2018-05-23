var express = require('express');
var Routes = express.Router();
var BookRoutes = require('./BookController/BookRoutes');

Routes.use('/book/', BookRoutes);

module.exports = Routes;