"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var VehicleType_1 = require("./Models/VehicleType");
var ParkingSpot_1 = require("./ParkingSpot");
var Level = /** @class */ (function () {
    function Level(floor, numSport) {
        this.floor = floor;
        this.parkingSpots = new Array(numSport);
        var spotForBikes = .5 * numSport;
        var spotForCars = .3 * numSport;
        for (var i = 0; i < spotForBikes; i++) {
            this.parkingSpots[i] = new ParkingSpot_1.default(i, VehicleType_1.default.MOTORBIKE);
        }
        for (var i = spotForBikes; i < spotForBikes + spotForCars; i++) {
            this.parkingSpots[i] = new ParkingSpot_1.default(i, VehicleType_1.default.CAR);
        }
        for (var i = spotForBikes + spotForCars; i < numSport; i++) {
            this.parkingSpots[i] = new ParkingSpot_1.default(i, VehicleType_1.default.TRUCK);
        }
        console.log("Level ".concat(floor, " created with ").concat(numSport, " spots"));
        console.log("Bikes: ".concat(spotForBikes, ", Cars: ").concat(spotForCars, ", Trucks: ").concat(numSport - spotForBikes - spotForCars));
    }
    // It should be synchronized in Java
    Level.prototype.parkVehicle = function (vehicle) {
        for (var _i = 0, _a = this.parkingSpots; _i < _a.length; _i++) {
            var spot = _a[_i];
            if (spot.isAvailable() && spot.getVehicleType() === vehicle.getType()) {
                spot.parkVehicle(vehicle);
                return true;
            }
        }
        return false;
    };
    // It should be synchronized in Java
    Level.prototype.unparkVehicle = function (vehicle) {
        for (var _i = 0, _a = this.parkingSpots; _i < _a.length; _i++) {
            var spot = _a[_i];
            if (!spot.isAvailable() && spot.getVehicle() === vehicle) {
                spot.unparkVehicle();
                return true;
            }
        }
        return false;
    };
    Level.prototype.displayAvailability = function () {
        console.log("Level ".concat(this.floor, " availability:"));
        for (var _i = 0, _a = this.parkingSpots; _i < _a.length; _i++) {
            var spot = _a[_i];
            console.log("Spot ".concat(spot.getSpotNumber(), " - ").concat(spot.isAvailable() ? 'Available' : 'Occupied', " - ").concat(spot.getVehicleType()));
        }
    };
    return Level;
}());
exports.default = Level;
