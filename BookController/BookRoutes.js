var express = require('express');
var route = express.Router();
var controller = require('./Controller');

route.post('/', function (req, res) {
    controller.addBook(req.body).then(function (data) {
        res.status(data.status).send(data.message);
    }).catch(function (err) {
        res.status(err.status).send(err.message);
    });
});

route.get('/', function (req, res) {
    controller.getAllBooks().then(function (data) {
        res.status(data.status).send(data.bookData);
    }).catch(function (err) {
        res.status(err.status).send(err.message);
    });
});

route.get('/:id', function (req, res) {
    controller.getBook(req.params.id).then(function (data) {
        res.status(data.status).send(data.book);
    }).catch(function (err) {
        res.status(err.status).send(err.message);
    });
});

route.put('/:id',function (req, res) {
    controller.updateBook(req.params.id, req.body).then(function (data) {
        res.status(data.status).send(data.message);
    }).catch(function (err) {
        res.status(err.status).send(err.message);
    });
});

route.delete('/:id',function (req, res) {
    controller.deleteBook(req.params.id).then(function (data) {
        res.status(data.status).send(data.message);
    }).catch(function (err) {
        res.status(err.status).send(err.message);
    });
});

module.exports = route;