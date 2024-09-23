"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ParkingSpot = /** @class */ (function () {
    function ParkingSpot(spotNumber, vehicleType) {
        this.vehicle = null;
        this.spotNumber = spotNumber;
        this.vehicleType = vehicleType;
    }
    ParkingSpot.prototype.isAvailable = function () {
        return this.vehicle === null;
    };
    // It should be synchronized in Java
    ParkingSpot.prototype.parkVehicle = function (vehicle) {
        if (this.isAvailable() && vehicle.getType() === this.vehicleType) {
            this.vehicle = vehicle;
            console.log("Vehicle ".concat(vehicle.getLiscensePlate(), " parked at spot ").concat(this.spotNumber));
            return true;
        }
        else {
            console.log("Vehicle ".concat(vehicle.getLiscensePlate(), " cannot be parked at spot ").concat(this.spotNumber));
            return false;
        }
    };
    // It should be synchronized in Java
    ParkingSpot.prototype.unparkVehicle = function () {
        if (this.vehicle !== null) {
            console.log("Vehicle ".concat(this.vehicle.getLiscensePlate(), " unparked from spot ").concat(this.spotNumber));
            this.vehicle = null;
            return true;
        }
        else {
            console.log("No vehicle parked at spot ".concat(this.spotNumber));
            return false;
        }
    };
    ParkingSpot.prototype.getSpotNumber = function () {
        return this.spotNumber;
    };
    ParkingSpot.prototype.getVehicle = function () {
        return this.vehicle;
    };
    ParkingSpot.prototype.getVehicleType = function () {
        return this.vehicleType;
    };
    return ParkingSpot;
}());
exports.default = ParkingSpot;
