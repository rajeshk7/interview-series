"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var InternalDispatcher = /** @class */ (function () {
    function InternalDispatcher() {
        var _this = this;
        this.elevatorController = [];
        this.requestElevator = function (destination, elevatorCar) {
            for (var i = 0; i < _this.elevatorController.length; i++) {
                var elevatorController = _this.elevatorController[i];
                if (elevatorController.elevatorCar.id === elevatorCar.id) {
                    elevatorController.submitExternalRequest(destination, 0 /* Direction.UP */);
                }
            }
        };
    }
    return InternalDispatcher;
}());
exports.default = InternalDispatcher;
