"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BookIterator = /** @class */ (function () {
    function BookIterator(books) {
        this.index = 0;
        this.books = [];
        this.books = books;
    }
    BookIterator.prototype.hasNext = function () {
        return this.index < this.books.length;
    };
    BookIterator.prototype.next = function () {
        return this.hasNext() ? this.books[this.index++] : null;
    };
    return BookIterator;
}());
exports.default = BookIterator;
