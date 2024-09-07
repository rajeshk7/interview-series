"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Building = /** @class */ (function () {
    function Building(floors) {
        var _this = this;
        this.addFloor = function (floor) {
            _this.floorList.push(floor);
        };
        this.removeFloor = function (floor) {
            _this.floorList = _this.floorList.filter(function (f) { return f != floor; });
        };
        this.getAllFloors = function () {
            return _this.floorList;
        };
        this.floorList = floors;
    }
    return Building;
}());
exports.default = Building;
