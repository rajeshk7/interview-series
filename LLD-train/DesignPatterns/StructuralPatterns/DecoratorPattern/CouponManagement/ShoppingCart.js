"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TypeCouponDecorator_1 = require("./Implementation/TypeCouponDecorator");
var PercentageCouponDecorator_1 = require("./Implementation/PercentageCouponDecorator");
var ShoppingCart = /** @class */ (function () {
    function ShoppingCart() {
        this.products = [];
    }
    ShoppingCart.prototype.addTOCart = function (product) {
        console.log("\u001B[92m" /* Color.fgBrightGreen */ + "Adding ".concat(product.getName(), " to the cart") + "\u001B[0m" /* Color.reset */);
        console.log("\u001B[91m" /* Color.fgBrightRed */ + "Price: " + product.getPrice() + "\u001B[0m" /* Color.reset */ + "\n");
        this.products.push(new TypeCouponDecorator_1.default(new PercentageCouponDecorator_1.default(product, 10), 20, product.getType()));
    };
    ShoppingCart.prototype.getTotalPrice = function () {
        return this.products.reduce(function (acc, product) { return acc + product.getPrice(); }, 0);
    };
    return ShoppingCart;
}());
exports.default = ShoppingCart;
