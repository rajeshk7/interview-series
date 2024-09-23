"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ElevatorDisplay = /** @class */ (function () {
    function ElevatorDisplay() {
        var _this = this;
        this.floor = 0;
        this.direction = 0 /* Direction.UP */;
        this.setDisplay = function (floor, direction) {
            _this.floor = floor;
            _this.direction = direction;
        };
        this.showDisplay = function (floor, direction) {
            console.log("Floor: ".concat(floor, " Direction"));
            console.log("Direction: ".concat(direction));
        };
    }
    return ElevatorDisplay;
}());
exports.default = ElevatorDisplay;
