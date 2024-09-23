"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PriorityQueue = require('js-priority-queue');
var ElevatorController = /** @class */ (function () {
    function ElevatorController(elevatorCar) {
        var _this = this;
        this.submitExternalRequest = function (floorNumber, direction) {
            if (direction === 0 /* Direction.UP */) {
                _this.upMinPQ.queue(floorNumber);
            }
            else {
                _this.downLowPQ.queue(floorNumber);
            }
        };
        this.submitInternalRequest = function (floorNumber) {
            console.log("No loigc implemented yet submitInternalRequest");
        };
        this.controlEleveator = function () {
            console.log("No loigc implemented yet controlEleveator");
        };
        this.elevatorCar = elevatorCar;
        this.upMinPQ = new PriorityQueue({ comparator: function (a, b) { return a - b; } });
        this.downLowPQ = new PriorityQueue({ comparator: function (a, b) { return b - a; } });
    }
    return ElevatorController;
}());
exports.default = ElevatorController;
