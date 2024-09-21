import ParkingSlotType from "./ParkingSlotType";

export const calculateParkingFee = (slotType: ParkingSlotType, hours: number): number => {
    switch (slotType) {
        case ParkingSlotType.TwoWheeler:
            return hours * 10;
        case ParkingSlotType.Compact:
            return hours * 20;
        case ParkingSlotType.Medium:
            return hours * 30;
        case ParkingSlotType.Large:
            return hours * 40;
    }
}

export default calculateParkingFee;