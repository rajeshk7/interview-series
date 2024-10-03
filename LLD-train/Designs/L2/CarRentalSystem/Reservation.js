"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Reservation {
    constructor(reservationId, customer, car, startDate, endDate) {
        this.reservationId = reservationId;
        this.customer = customer;
        this.car = car;
        this.startDate = startDate;
        this.endDate = endDate;
        this.totalPrice = this.calculateTotalPrice();
    }
    calculateTotalPrice() {
        const diffInTime = this.endDate.getTime() - this.startDate.getTime();
        const diffInDays = Math.ceil(diffInTime / (1000 * 3600 * 24));
        return diffInDays * this.car.getRentalPricePerDay();
    }
    getReservationId() {
        return this.reservationId;
    }
    getCustomer() {
        return this.customer;
    }
    getCar() {
        return this.car;
    }
    getStartDate() {
        return this.startDate;
    }
    getEndDate() {
        return this.endDate;
    }
    getTotalPrice() {
        return this.totalPrice;
    }
}
exports.default = Reservation;
