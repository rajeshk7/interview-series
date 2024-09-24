"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Product = /** @class */ (function () {
    function Product() {
    }
    Product.prototype.getProduct = function () {
        console.log('Product created');
        return new Product();
    };
    return Product;
}());
exports.default = Product;
