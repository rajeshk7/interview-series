"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ParkingSlot {
    constructor(name, parkingSlotType) {
        this.isAvailable = true;
        this.vehicle = null;
        this.name = name;
        this.parkingSlotType = parkingSlotType;
    }
    addVehicle(vehicle) {
        if (!this.isAvailable) {
            return false;
        }
        this.vehicle = vehicle;
        this.isAvailable = false;
        return true;
    }
    removeVehicle() {
        if (this.isAvailable) {
            return false;
        }
        this.vehicle = null;
        this.isAvailable = true;
        return true;
    }
}
exports.default = ParkingSlot;
