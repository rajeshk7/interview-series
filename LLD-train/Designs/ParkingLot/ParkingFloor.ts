import ParkingSlotType from "./Models/ParkingSlotType";
import Vehicle from "./Models/Vehicle";
import VehicleCategory from "./Models/VehicleCategory";
import ParkingSlot from "./ParkingSlot";

class ParkingFloor  {
    name: string;
    parkingSlots: Map<ParkingSlotType, Map<string, ParkingSlot>>;

    constructor(name: string, parkingSlots: Map<ParkingSlotType, Map<string, ParkingSlot>>) {
        this.name = name;
        this.parkingSlots = parkingSlots;
    }

    getRelevantSlotForVehicleAndPark(vehicle: Vehicle): ParkingSlot | undefined {
        const vehicleCategory = vehicle.vehicleCategory;
        const vehicleCategorySlotType = this.pickCorrectSlot(vehicleCategory);
    
        if (!vehicleCategorySlotType) {
            console.log("No slot available for this vehicle category");
            return undefined;
        }
    
        const parkingSlotMap = this.parkingSlots.get(vehicleCategorySlotType as any);
    
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

    pickCorrectSlot(vehicleCategory: VehicleCategory): ParkingSlotType | undefined {
        switch (vehicleCategory) {
            case VehicleCategory.TwoWheeler:
                return ParkingSlotType.TwoWheeler;
            case VehicleCategory.Compact:
                return ParkingSlotType.Compact;
            case VehicleCategory.Medium:
                return ParkingSlotType.Medium;
            case VehicleCategory.Large:
                return ParkingSlotType.Large;
            default:
                return undefined;
        }
    }

}

export default ParkingFloor;