"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var IncreaseTemperature = /** @class */ (function () {
    function IncreaseTemperature(ac) {
        this.ac = ac;
    }
    IncreaseTemperature.prototype.execute = function () {
        this.ac.increaseTemperature();
    };
    IncreaseTemperature.prototype.undo = function () {
        this.ac.decreaseTemperature();
    };
    return IncreaseTemperature;
}());
exports.default = IncreaseTemperature;
