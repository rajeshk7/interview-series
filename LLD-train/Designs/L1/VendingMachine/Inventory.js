"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Inventory = /** @class */ (function () {
    function Inventory() {
        this.products = new Map();
    }
    Inventory.prototype.addProduct = function (product, quantity) {
        var _a;
        this.products.set(product, ((_a = this.products.get(product)) !== null && _a !== void 0 ? _a : 0) + quantity);
    };
    Inventory.prototype.removeProduct = function (product) {
        this.products.delete(product);
    };
    Inventory.prototype.updateQuantity = function (product, quantity) {
        this.products.set(product, quantity);
    };
    Inventory.prototype.getQuantity = function (product) {
        return this.products.get(product);
    };
    Inventory.prototype.isAvailable = function (product) {
        var _a;
        return this.products.has(product) && ((_a = this.products.get(product)) !== null && _a !== void 0 ? _a : 0) > 0;
    };
    return Inventory;
}());
exports.default = Inventory;
