"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ItemShelf = /** @class */ (function () {
    function ItemShelf() {
    }
    ItemShelf.prototype.getCode = function () {
        return this.code;
    };
    ItemShelf.prototype.getItem = function () {
        return this.item;
    };
    ItemShelf.prototype.getIsSoldOut = function () {
        return this.isSoldOut;
    };
    ItemShelf.prototype.setIsSoldOut = function (isSoldOut) {
        this.isSoldOut = isSoldOut;
    };
    ItemShelf.prototype.setItem = function (item) {
        this.item = item;
    };
    ItemShelf.prototype.setCode = function (code) {
        this.code = code;
    };
    return ItemShelf;
}());
exports.default = ItemShelf;
