"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DecreaseTemperature = /** @class */ (function () {
    function DecreaseTemperature(ac) {
        this.ac = ac;
    }
    DecreaseTemperature.prototype.execute = function () {
        this.ac.decreaseTemperature();
    };
    DecreaseTemperature.prototype.undo = function () {
        this.ac.increaseTemperature();
    };
    return DecreaseTemperature;
}());
exports.default = DecreaseTemperature;
