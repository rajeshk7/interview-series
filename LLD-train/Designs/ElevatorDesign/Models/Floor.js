"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ExternalDispatcher_1 = require("../ExternalDispatcher");
var Floor = /** @class */ (function () {
    function Floor(floor) {
        var _this = this;
        this.pressButton = function (floor, direction) {
            console.log("[Floor] : Floor " + _this.floorNumber + " pressed button to go to floor " + floor);
            _this.floorNumber = floor;
            _this.externalDispatcher.requestElevator(_this.floorNumber, direction);
        };
        this.floorNumber = floor;
        this.externalDispatcher = new ExternalDispatcher_1.default();
    }
    return Floor;
}());
exports.default = Floor;
