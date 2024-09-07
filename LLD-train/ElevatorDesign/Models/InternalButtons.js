"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var InternalDispatcher_1 = require("../InternalDispatcher");
var InternalButtons = /** @class */ (function () {
    function InternalButtons() {
        var _this = this;
        this.dispatcher = new InternalDispatcher_1.default();
        this.availableButtons = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        this.selectedButton = 0;
        this.pressButton = function (nextFloor, elevatorCar) {
            _this.dispatcher.requestElevator(nextFloor, elevatorCar);
        };
    }
    return InternalButtons;
}());
exports.default = InternalButtons;
