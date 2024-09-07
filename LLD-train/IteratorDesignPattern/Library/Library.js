"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BookIterator_1 = require("./BookIterator");
var Library = /** @class */ (function () {
    function Library(books) {
        if (books === void 0) { books = []; }
        this.books = [];
        this.books = books;
    }
    Library.prototype.addBook = function (book) {
        this.books.push(book);
    };
    Library.prototype.createIterator = function () {
        return new BookIterator_1.default(this.books);
    };
    return Library;
}());
exports.default = Library;
