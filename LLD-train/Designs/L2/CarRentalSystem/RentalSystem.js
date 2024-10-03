"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Reservation_1 = __importDefault(require("./Reservation"));
const CreditCardPaymentProcessor_1 = __importDefault(require("./Payment/CreditCardPaymentProcessor"));
class RentalSystem {
    // Should be concurrent hashmap for thread safety
    constructor() {
        this.cars = new Map();
        this.revserations = new Map();
        this.paymentProcessor = new CreditCardPaymentProcessor_1.default();
    }
    // Should be synchronized for thread safety
    static getInstance() {
        if (!this.instance) {
            this.instance = new RentalSystem();
        }
        return this.instance;
    }
    addCar(car) {
        this.cars.set(car.getLisencePlate(), car);
    }
    removeCar(lisencePlate) {
        this.cars.delete(lisencePlate);
    }
    searchCar(make, model, startDate, endDate) {
        const cars = Array.from(this.cars.values());
        return cars.filter(car => {
            if (car.getName() === make && car.getModel() === model) {
                for (const curCar of this.cars.values()) {
                    if (curCar.getLisencePlate() === car.getLisencePlate()) {
                        if (curCar.isAvailable()) {
                            return this.isCarAvailable(curCar, startDate, endDate);
                        }
                    }
                }
            }
            return false;
        });
    }
    isCarAvailable(car, startDate, endDate) {
        for (const reservation of this.revserations.values()) {
            if (reservation.getCar().getLisencePlate() === car.getLisencePlate()) {
                if (startDate >= reservation.getStartDate() && startDate <= reservation.getEndDate()) {
                    return false;
                }
                if (endDate >= reservation.getStartDate() && endDate <= reservation.getEndDate()) {
                    return false;
                }
            }
        }
        return true;
    }
    makeReservation(customer, car, startDate, endDate) {
        if (!this.isCarAvailable(car, startDate, endDate)) {
            console.log("Car is not available for the given dates");
            return null;
        }
        const reservationId = this.generateReservationId();
        const reservation = new Reservation_1.default(reservationId, customer, car, startDate, endDate);
        this.revserations.set(reservationId, reservation);
        car.setAvailable(false);
        return reservation;
    }
    cancelReservation(reservationId) {
        const reservation = this.revserations.get(reservationId);
        if (reservation) {
            reservation.getCar().setAvailable(true);
            this.revserations.delete(reservationId);
        }
    }
    processPayment(reservation) {
        this.paymentProcessor.PaymentProcessor(reservation.getTotalPrice());
    }
    generateReservationId() {
        return "RES_" + Math.random().toString(36).substring(7);
    }
}
exports.default = RentalSystem;
