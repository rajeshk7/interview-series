"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ElevatorDisplay_1 = require("./ElevatorDisplay");
var ElevatorDoor_1 = require("./ElevatorDoor");
var InternalButtons_1 = require("./InternalButtons");
var ElevatorCar = /** @class */ (function () {
    function ElevatorCar(id) {
        var _this = this;
        this.showDisplay = function () {
            _this.elevatorDisplay.showDisplay(_this.currentFLoor, _this.direction);
        };
        this.pressButton = function (nextFloor) {
            _this.internalButtons.pressButton(nextFloor, _this);
        };
        this.setDisplay = function () {
            _this.elevatorDisplay.setDisplay(_this.currentFLoor, _this.direction);
        };
        this.id = id;
        this.elevatorDisplay = new ElevatorDisplay_1.default();
        this.internalButtons = new InternalButtons_1.default();
        this.elevatorState = 1 /* ElevatorState.IDLE */;
        this.currentFLoor = 0;
        this.direction = 0 /* Direction.UP */;
        this.elevatorDoor = new ElevatorDoor_1.default();
    }
    ElevatorCar.prototype.moveToFloor = function (nextFloor) {
        var _this = this;
        var move = function (start, end, step) {
            for (var i = start; i !== end; i += step) {
                _this.elevatorState = 0 /* ElevatorState.MOVING */;
                _this.currentFLoor = i;
                _this.setDisplay();
                _this.showDisplay();
            }
            if (_this.currentFLoor === nextFloor) {
                _this.elevatorDoor.openDoor();
                _this.elevatorState = 1 /* ElevatorState.IDLE */;
                return true;
            }
            return false;
        };
        var startFloor = this.currentFLoor;
        if (this.direction === 0 /* Direction.UP */) {
            return move(startFloor, nextFloor + 1, 1);
        }
        else if (this.direction === 1 /* Direction.DOWN */) {
            return move(startFloor, nextFloor - 1, -1);
        }
        return false;
    };
    return ElevatorCar;
}());
exports.default = ElevatorCar;
