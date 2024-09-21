"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ElevatorDoor = /** @class */ (function () {
    function ElevatorDoor() {
        this.openDoor = function () {
            console.log("Door is opening");
        };
        this.closeDoor = function () {
            console.log("Door is closing");
        };
    }
    return ElevatorDoor;
}());
exports.default = ElevatorDoor;
