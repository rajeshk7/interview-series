import Vehicle from "./Models/Vehicle";
import VehicleType from "./Models/VehicleType";

class ParkingSpot {
    private spotNumber: number;
    private vehicle: Vehicle | null = null;
    private vehicleType: VehicleType;

    constructor(spotNumber: number, vehicleType: VehicleType) {
        this.spotNumber = spotNumber;
        this.vehicleType = vehicleType;
    }

    isAvailable() {
        return this.vehicle === null;
    }

    // It should be synchronized in Java
    parkVehicle(vehicle: Vehicle) {
        if(this.isAvailable() && vehicle.getType() === this.vehicleType) {
            this.vehicle = vehicle;
            console.log(`Vehicle ${vehicle.getLiscensePlate()} parked at spot ${this.spotNumber}`);
            return true;
        }
        else    {
            console.log(`Vehicle ${vehicle.getLiscensePlate()} cannot be parked at spot ${this.spotNumber}`);
            return false;
        }
    }

    // It should be synchronized in Java
    unparkVehicle() {
        if(this.vehicle !== null) {
            console.log(`Vehicle ${this.vehicle.getLiscensePlate()} unparked from spot ${this.spotNumber}`);
            this.vehicle = null;
            return true;
        }
        else    {
            console.log(`No vehicle parked at spot ${this.spotNumber}`);
            return false;
        }
    }

    getSpotNumber() {
        return this.spotNumber;
    }

    getVehicle() {
        return this.vehicle;
    }

    getVehicleType() {
        return this.vehicleType;
    }
}

export default ParkingSpot;