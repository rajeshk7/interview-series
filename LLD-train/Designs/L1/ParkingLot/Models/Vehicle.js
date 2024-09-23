"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Vehicle = /** @class */ (function () {
    function Vehicle(type, liscensePlate) {
        this.type = type;
        this.liscensePlate = liscensePlate;
    }
    Vehicle.prototype.getType = function () {
        return this.type;
    };
    Vehicle.prototype.getLiscensePlate = function () {
        return this.liscensePlate;
    };
    return Vehicle;
}());
exports.default = Vehicle;
