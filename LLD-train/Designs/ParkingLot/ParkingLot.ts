import ParkingSlotType from "./Models/ParkingSlotType";
import ParkingSlot from "./ParkingSlot";
import Ticket from "./Models/Ticket";
import Vehicle from "./Models/Vehicle";
import ParkingFloor from "./ParkingFloor";
import calculateParkingFee from "./Models/CalculateParkingFee";

class ParkingLot {
    nameOfParkingLot: string;
    address: string;
    parkingFloors: ParkingFloor[];
    private static parkingLotInstance: ParkingLot;

    private constructor(nameOfParkingLot: string, address: string, parkingFloors: ParkingFloor[]) {
        this.nameOfParkingLot = nameOfParkingLot;
        this.address = address;
        this.parkingFloors = parkingFloors;
    }

    public static getInstance(nameOfParkingLot: string, address: string, parkingFloors: ParkingFloor[]): ParkingLot {
        if (!ParkingLot.parkingLotInstance) {
            ParkingLot.parkingLotInstance = new ParkingLot(nameOfParkingLot, address, parkingFloors);
        }
        return ParkingLot.parkingLotInstance;
    }

    public addFloors(name: string, parkSlots: Map<ParkingSlotType, Map<string, ParkingSlot>>): void {
        const parkingFloor = new ParkingFloor(name, parkSlots);
        this.parkingFloors.push(parkingFloor);
    }

    public removeFloors(parkingFloor: ParkingFloor): void {
        const index = this.parkingFloors.indexOf(parkingFloor);
        if (index > -1) {
            this.parkingFloors.splice(index, 1);
        } else {
            console.error("Parking floor not found");
        }
    }

    public assignTicket(vehicle: Vehicle): Ticket | undefined {
        const parkingSlot = this.getParkingSlotForVehicleAndPark(vehicle);
        if (!parkingSlot) {
            console.log("No parking slot available");
            return undefined;
        }

        const ticket = new Ticket(vehicle, parkingSlot);
        console.log("Ticket assigned: ", ticket);
        return ticket;
    }

    public scanAndPay(ticket: Ticket): number {
        ticket.endTime = new Date();
        const timeDiff = ticket.endTime.getTime() - ticket.startTime.getTime();
        const hours = Math.ceil(timeDiff / (1000 * 3600));
        console.log("Total hours parked: ", hours);

        const slotType = ticket.parkingSlot.parkingSlotType;
        const amount = calculateParkingFee(slotType, hours);
        console.log("Total amount to be paid: ", amount);
        return amount;
    }

    public createTicketForSlot(vehicle: Vehicle, parkingSlot: ParkingSlot): Ticket {
        const ticket = new Ticket(vehicle, parkingSlot);
        console.log("Ticket assigned: ", ticket);
        return ticket;
    }

    private getParkingSlotForVehicleAndPark(vehicle: Vehicle): ParkingSlot | undefined {
        for (const parkingFloor of this.parkingFloors) {
            const parkingSlot = parkingFloor.getRelevantSlotForVehicleAndPark(vehicle);
            if (parkingSlot) {
                return parkingSlot;
            }
        }
        return undefined;
    }
}

export default ParkingLot;