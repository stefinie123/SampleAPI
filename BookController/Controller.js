var mongoose = require('../DBSchema/DBconfig')
var Book = mongoose.model('Book');

var Controller = function () {
    this.addBook = function (data) {
        return new Promise(function (resolve, reject) {
            var book = new Book({
                name: data.name,
                author: data.author
            });
            book.save().then(function () {
                resolve({status: 201, message: 'Book added'});
            }).catch(function (reason) { 
                reject({status: 500, message: 'Error: '+reason})
            });
            
        });
    }
    
    this.getAllBooks = function () {
        return new Promise(function (resolve, reject) {
            Book.find().exec().then(function (data) {
                resolve({status: 200, bookData: data});
            }).catch(function (reason) {
                reject({status: 500, message: 'Error: '+reason});
            });
        });
    }
    
    this.getBook = function (id) {
        return new Promise(function (resolve, reject) {
            Book.find({_id: id}).exec().then(function (data) {
                resolve({status: 200, book: data});
            }).catch(function (reason) {
                reject({status: 500, message: 'Error- Book not found: '+reason});
            });
        });
    }

    this.updateBook = function (id, data) {
        return new Promise(function (resolve, reject) {
            Book.update({_id: id}, data).exec().then(function () {
                resolve({status: 200, message: 'Book updated'});
            }).catch(function (reason) {
                reject({status: 500, message: 'Cannot update book: '+reason});
            });
        });
    }

    this.deleteBook = function (id) {
        return new Promise(function (resolve, reject) {
            Book.remove({_id: id}).then(function () {
                resolve({status: 200, message: 'Book deleted'});
            }).catch(function (reason) {
                reject({status: 500, message: 'Cannot delete book: '+reason});
            });
        });
    }
}

module.exports = new Controller();