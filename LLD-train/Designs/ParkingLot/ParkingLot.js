"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Ticket_1 = __importDefault(require("./Models/Ticket"));
const ParkingFloor_1 = __importDefault(require("./ParkingFloor"));
const CalculateParkingFee_1 = __importDefault(require("./Models/CalculateParkingFee"));
class ParkingLot {
    constructor(nameOfParkingLot, address, parkingFloors) {
        this.nameOfParkingLot = nameOfParkingLot;
        this.address = address;
        this.parkingFloors = parkingFloors;
    }
    static getInstance(nameOfParkingLot, address, parkingFloors) {
        if (!ParkingLot.parkingLotInstance) {
            ParkingLot.parkingLotInstance = new ParkingLot(nameOfParkingLot, address, parkingFloors);
        }
        return ParkingLot.parkingLotInstance;
    }
    addFloors(name, parkSlots) {
        const parkingFloor = new ParkingFloor_1.default(name, parkSlots);
        this.parkingFloors.push(parkingFloor);
    }
    removeFloors(parkingFloor) {
        const index = this.parkingFloors.indexOf(parkingFloor);
        if (index > -1) {
            this.parkingFloors.splice(index, 1);
        }
        else {
            console.error("Parking floor not found");
        }
    }
    assignTicket(vehicle) {
        const parkingSlot = this.getParkingSlotForVehicleAndPark(vehicle);
        if (!parkingSlot) {
            console.log("No parking slot available");
            return undefined;
        }
        const ticket = new Ticket_1.default(vehicle, parkingSlot);
        console.log("Ticket assigned: ", ticket);
        return ticket;
    }
    scanAndPay(ticket) {
        ticket.endTime = new Date();
        const timeDiff = ticket.endTime.getTime() - ticket.startTime.getTime();
        const hours = Math.ceil(timeDiff / (1000 * 3600));
        console.log("Total hours parked: ", hours);
        const slotType = ticket.parkingSlot.parkingSlotType;
        const amount = (0, CalculateParkingFee_1.default)(slotType, hours);
        console.log("Total amount to be paid: ", amount);
        return amount;
    }
    createTicketForSlot(vehicle, parkingSlot) {
        const ticket = new Ticket_1.default(vehicle, parkingSlot);
        console.log("Ticket assigned: ", ticket);
        return ticket;
    }
    getParkingSlotForVehicleAndPark(vehicle) {
        for (const parkingFloor of this.parkingFloors) {
            const parkingSlot = parkingFloor.getRelevantSlotForVehicleAndPark(vehicle);
            if (parkingSlot) {
                return parkingSlot;
            }
        }
        return undefined;
    }
}
exports.default = ParkingLot;
