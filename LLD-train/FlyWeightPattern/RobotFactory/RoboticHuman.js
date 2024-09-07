"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RoboticHuman = /** @class */ (function () {
    function RoboticHuman(type, info) {
        this.type = type;
        this.info = info;
    }
    RoboticHuman.prototype.getRobotType = function () {
        return this.type;
    };
    RoboticHuman.prototype.getInfo = function () {
        return this.info;
    };
    RoboticHuman.prototype.print = function (row, col) {
        console.log("Prints a RoboticHuman at row ".concat(row, ", col ").concat(col));
    };
    return RoboticHuman;
}());
exports.default = RoboticHuman;
