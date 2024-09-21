"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PriorityQueue = require('js-priority-queue');
var ElevatorController = /** @class */ (function () {
    function ElevatorController(elevatorCar) {
        var _this = this;
        this.submitExternalRequest = function (floorNumber, direction) {
            console.log("\n[ElevatorController.submitExternalRequest] Elevator ".concat(_this.elevatorCar.id, " received external request to floor ").concat(floorNumber, " with direction ").concat(direction));
            if (direction === 0 /* Direction.UP */) {
                _this.upMinPQ.queue(floorNumber);
            }
            else {
                _this.downLowPQ.queue(floorNumber);
            }
        };
        this.submitInternalRequest = function (floorNumber, queue) {
            console.log("[ElevatorController.submitInternalRequest] Elevator ".concat(_this.elevatorCar.id, " processing internal request to floor ").concat(floorNumber));
            _this.elevatorCar.moveToFloor(floorNumber);
            _this.elevatorCar.elevatorDoor.openDoor();
            _this.elevatorCar.showDisplay();
            queue.dequeue();
        };
        this.controlElevator = function () {
            console.log("\n[ElevatorController.controlElevator] Starting elevator control loop");
            setInterval(function () {
                if (_this.elevatorCar.direction === 0 /* Direction.UP */ && _this.upMinPQ.length > 0) {
                    _this.submitInternalRequest(_this.upMinPQ.peek(), _this.upMinPQ);
                }
                else if (_this.elevatorCar.direction === 1 /* Direction.DOWN */ && _this.downLowPQ.length > 0) {
                    _this.submitInternalRequest(_this.downLowPQ.peek(), _this.downLowPQ);
                }
                else {
                    console.log("[ElevatorController.controlElevator] No requests in queue, elevator is idle");
                }
            }, 2000); // Check every second
        };
        this.elevatorCar = elevatorCar;
        this.upMinPQ = new PriorityQueue({ comparator: function (a, b) { return a - b; } });
        this.downLowPQ = new PriorityQueue({ comparator: function (a, b) { return b - a; } });
        this.controlElevator();
    }
    return ElevatorController;
}());
exports.default = ElevatorController;
