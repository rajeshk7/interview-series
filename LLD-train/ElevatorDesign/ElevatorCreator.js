"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ElevatorController_1 = require("./ElevatorController");
var ElevatorCar_1 = require("./Models/ElevatorCar");
var ElevatorCreator = /** @class */ (function () {
    function ElevatorCreator(totalCars) {
        this.elevatorControllerList = [];
        for (var i = 0; i < totalCars; i++) {
            var elevatorCar = new ElevatorCar_1.default(i);
            var elevatorController = new ElevatorController_1.default(elevatorCar);
            this.elevatorControllerList.push(elevatorController);
        }
    }
    return ElevatorCreator;
}());
exports.default = ElevatorCreator;
