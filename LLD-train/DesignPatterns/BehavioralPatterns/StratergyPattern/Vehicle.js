"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Vehicle = /** @class */ (function () {
    function Vehicle(driveStratergy) {
        this.driveStratergy = driveStratergy;
    }
    Vehicle.prototype.drive = function () {
        this.driveStratergy.drive();
    };
    return Vehicle;
}());
exports.default = Vehicle;
