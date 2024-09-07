"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Book = /** @class */ (function () {
    function Book(title, author) {
        this.title = title;
        this.author = author;
    }
    Book.prototype.getTitle = function () {
        return this.title;
    };
    Book.prototype.getAuthor = function () {
        return this.author;
    };
    return Book;
}());
exports.default = Book;
