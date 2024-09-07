"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var ElevatorCreator_1 = __importDefault(require("./ElevatorCreator"));
var ExternalDispatcher = /** @class */ (function () {
    function ExternalDispatcher() {
        var _this = this;
        this.elevatorCreator = new ElevatorCreator_1.default(2);
        this.elevatorControllerList = this.elevatorCreator.elevatorControllerList;
        this.requestElevator = function (floorNumber, direction) {
            for (var i = 0; i < _this.elevatorControllerList.length; i++) {
                var elevatorController = _this.elevatorControllerList[i];
                var elevatorId = elevatorController.elevatorCar.id;
                if (elevatorId % 2 === 0 && floorNumber % 2 === 0) {
                    elevatorController.submitExternalRequest(floorNumber, direction);
                }
                else {
                    elevatorController.submitExternalRequest(floorNumber, direction);
                }
            }
        };
    }
    return ExternalDispatcher;
}());
exports.default = ExternalDispatcher;
