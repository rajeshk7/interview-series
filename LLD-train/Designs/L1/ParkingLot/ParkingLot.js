"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ParkingLot = /** @class */ (function () {
    function ParkingLot() {
        this.levels = new Array();
    }
    // It should be synchronized in Java
    ParkingLot.getInstance = function () {
        if (this.instance == null) {
            this.instance = new ParkingLot();
        }
        return this.instance;
    };
    ParkingLot.prototype.addLevel = function (level) {
        this.levels.push(level);
    };
    ParkingLot.prototype.parkVehicle = function (vehicle) {
        for (var _i = 0, _a = this.levels; _i < _a.length; _i++) {
            var level = _a[_i];
            if (level.parkVehicle(vehicle))
                return true;
        }
        return false;
    };
    ParkingLot.prototype.unparkVehicle = function (vehicle) {
        for (var _i = 0, _a = this.levels; _i < _a.length; _i++) {
            var level = _a[_i];
            if (level.unparkVehicle(vehicle))
                return true;
        }
        return false;
    };
    ParkingLot.prototype.displayAvailability = function () {
        for (var _i = 0, _a = this.levels; _i < _a.length; _i++) {
            var level = _a[_i];
            level.displayAvailability();
        }
    };
    return ParkingLot;
}());
exports.default = ParkingLot;
