"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ElevatorCreator_1 = require("./ElevatorCreator");
var ExternalDispatcher = /** @class */ (function () {
    function ExternalDispatcher() {
        var _this = this;
        this.elevatorCreator = new ElevatorCreator_1.default(2);
        this.elevatorControllerList = this.elevatorCreator.elevatorControllerList;
        this.lastElevatorIndex = -1;
        this.requestElevator = function (floorNumber, direction) {
            // Alternate between elevators
            _this.lastElevatorIndex = (_this.lastElevatorIndex + 1) % _this.elevatorControllerList.length;
            var elevatorController = _this.elevatorControllerList[_this.lastElevatorIndex];
            var elevatorId = elevatorController.elevatorCar.id;
            console.log("[ExternalDispatcher] Elevator ".concat(elevatorId, " is going to floor ").concat(floorNumber));
            elevatorController.submitExternalRequest(floorNumber, direction);
        };
    }
    return ExternalDispatcher;
}());
exports.default = ExternalDispatcher;
