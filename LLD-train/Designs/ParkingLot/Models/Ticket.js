"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Ticket {
    constructor(vehicle, parkingSlot) {
        this.vehicle = vehicle;
        this.parkingSlot = parkingSlot;
        this.startTime = new Date();
        this.ticketNumber = Math.random().toString(36).substring(7);
        this.endTime = new Date();
    }
    createTicket(vehicle, parkingSlot) {
        this.vehicle = vehicle;
        this.parkingSlot = parkingSlot;
        this.startTime = new Date();
        this.ticketNumber = Math.random().toString(36).substring(7);
        return this;
    }
}
exports.default = Ticket;
