"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RoboticDog = /** @class */ (function () {
    function RoboticDog(type, info) {
        this.type = type;
        this.info = info;
    }
    RoboticDog.prototype.getRobotType = function () {
        return this.type;
    };
    RoboticDog.prototype.getRobotInfo = function () {
        return this.info;
    };
    RoboticDog.prototype.print = function (row, col) {
        console.log("Prints a RoboticDog at row ".concat(row, ", col ").concat(col));
    };
    return RoboticDog;
}());
exports.default = RoboticDog;
