"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ParkingSlotType_1 = __importDefault(require("./Models/ParkingSlotType"));
const VehicleCategory_1 = __importDefault(require("./Models/VehicleCategory"));
class ParkingFloor {
    constructor(name, parkingSlots) {
        this.name = name;
        this.parkingSlots = parkingSlots;
    }
    getRelevantSlotForVehicleAndPark(vehicle) {
        const vehicleCategory = vehicle.vehicleCategory;
        const vehicleCategorySlotType = this.pickCorrectSlot(vehicleCategory);
        if (!vehicleCategorySlotType) {
            console.log("No slot available for this vehicle category");
            return undefined;
        }
        const parkingSlotMap = this.parkingSlots.get(vehicleCategorySlotType);
        if (!parkingSlotMap) {
            console.log("No slot available for this vehicle category");
            return undefined;
        }
        for (const slot of parkingSlotMap.values()) {
            if (slot.isAvailable) {
                slot.addVehicle(vehicle);
                return slot;
            }
        }
        console.log("No available slot found");
        return undefined;
    }
    pickCorrectSlot(vehicleCategory) {
        switch (vehicleCategory) {
            case VehicleCategory_1.default.TwoWheeler:
                return ParkingSlotType_1.default.TwoWheeler;
            case VehicleCategory_1.default.Compact:
                return ParkingSlotType_1.default.Compact;
            case VehicleCategory_1.default.Medium:
                return ParkingSlotType_1.default.Medium;
            case VehicleCategory_1.default.Large:
                return ParkingSlotType_1.default.Large;
            default:
                return undefined;
        }
    }
}
exports.default = ParkingFloor;
