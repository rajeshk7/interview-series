"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CarIterator = /** @class */ (function () {
    function CarIterator(cars) {
        this.index = 0;
        this.cars = [];
        this.cars = cars;
    }
    CarIterator.prototype.hasNext = function () {
        return this.index < this.cars.length;
    };
    CarIterator.prototype.next = function () {
        return this.hasNext() ? this.cars[this.index++] : null;
    };
    return CarIterator;
}());
exports.default = CarIterator;
