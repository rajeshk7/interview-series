"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var ElevatorController_1 = __importDefault(require("./ElevatorController"));
var ElevatorCar_1 = __importDefault(require("./Models/ElevatorCar"));
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
