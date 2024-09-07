"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var ExternalDispatcher_1 = __importDefault(require("../ExternalDispatcher"));
var Floor = /** @class */ (function () {
    function Floor(floor) {
        var _this = this;
        this.pressButton = function (direction) {
            _this.externalDispatcher.requestElevator(_this.floorNumber, direction);
        };
        this.floorNumber = floor;
        this.externalDispatcher = new ExternalDispatcher_1.default();
    }
    return Floor;
}());
exports.default = Floor;
