"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Car = /** @class */ (function () {
    function Car(name, price) {
        this.name = name;
        this.price = price;
    }
    Car.prototype.getName = function () {
        return this.name;
    };
    Car.prototype.getPrice = function () {
        return this.price;
    };
    return Car;
}());
exports.default = Car;
