import Vehicle from "./Vehicle";
import ParkingSlot from "../ParkingSlot";

class Ticket {
    ticketNumber: string;
    startTime: Date;
    endTime: Date;
    vehicle: Vehicle;
    parkingSlot: ParkingSlot;

    constructor(vehicle: Vehicle, parkingSlot: ParkingSlot) {
        this.vehicle = vehicle;
        this.parkingSlot = parkingSlot;
        this.startTime = new Date();
        this.ticketNumber = Math.random().toString(36).substring(7);
        this.endTime = new Date();
    }

    createTicket(vehicle: Vehicle, parkingSlot: ParkingSlot): Ticket {
        this.vehicle = vehicle;
        this.parkingSlot = parkingSlot;
        this.startTime = new Date();
        this.ticketNumber = Math.random().toString(36).substring(7);
        return this;
    }
}

export default Ticket;