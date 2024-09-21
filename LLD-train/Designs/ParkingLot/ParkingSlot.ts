import Vehicle from "./Models/Vehicle";
import ParkingSlotType from "./Models/ParkingSlotType";

class ParkingSlot {
    name: string;
    isAvailable: boolean = true;
    vehicle: Vehicle | null = null;
    parkingSlotType: ParkingSlotType;

    constructor(name: string, parkingSlotType: ParkingSlotType) {
        this.name = name;
        this.parkingSlotType = parkingSlotType;
    }

    addVehicle(vehicle: Vehicle): boolean {
        if (!this.isAvailable) {
            return false;
        }
        this.vehicle = vehicle;
        this.isAvailable = false;
        return true;
    }

    removeVehicle(): boolean {
        if (this.isAvailable) {
            return false;
        }
        this.vehicle = null as any;
        this.isAvailable = true;
        return true;
    }
}

export default ParkingSlot;