"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TurnAcOff = /** @class */ (function () {
    function TurnAcOff(airConditioner) {
        this.airConditioner = airConditioner;
    }
    TurnAcOff.prototype.execute = function () {
        this.airConditioner.turnOff();
    };
    TurnAcOff.prototype.undo = function () {
        this.airConditioner.turnOn();
    };
    return TurnAcOff;
}());
exports.default = TurnAcOff;
