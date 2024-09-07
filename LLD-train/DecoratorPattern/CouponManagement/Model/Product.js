"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Product = /** @class */ (function () {
    function Product(name, price, type) {
        this.name = name;
        this.price = price;
        this.type = type;
    }
    Product.prototype.getType = function () {
        return this.type;
    };
    Product.prototype.getName = function () {
        return this.name;
    };
    return Product;
}());
exports.default = Product;
