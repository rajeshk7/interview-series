"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CarIterator_1 = require("./CarIterator");
var ShowRoom = /** @class */ (function () {
    function ShowRoom(cars) {
        if (cars === void 0) { cars = []; }
        this.cars = [];
        this.cars = cars;
    }
    ShowRoom.prototype.addCar = function (car) {
        this.cars.push(car);
    };
    ShowRoom.prototype.createIterator = function () {
        return new CarIterator_1.default(this.cars);
    };
    return ShowRoom;
}());
exports.default = ShowRoom;
