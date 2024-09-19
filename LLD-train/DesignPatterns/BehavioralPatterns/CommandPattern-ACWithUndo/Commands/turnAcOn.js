"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TurnAcOn = /** @class */ (function () {
    function TurnAcOn(airConditioner) {
        this.airConditioner = airConditioner;
    }
    TurnAcOn.prototype.execute = function () {
        this.airConditioner.turnOn();
    };
    TurnAcOn.prototype.undo = function () {
        this.airConditioner.turnOff();
    };
    return TurnAcOn;
}());
exports.default = TurnAcOn;
