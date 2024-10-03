"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Car_1 = __importDefault(require("./Car"));
const Customer_1 = __importDefault(require("./Customer"));
const RentalSystem_1 = __importDefault(require("./RentalSystem"));
const rentalSystem = RentalSystem_1.default.getInstance();
const toyota = new Car_1.default("Toyota", "Camry", 2020, "1234", 100);
const honda = new Car_1.default("Honda", "Civic", 2021, "5678", 80);
const ford = new Car_1.default("Ford", "Fusion", 2019, "91011", 90);
rentalSystem.addCar(toyota);
rentalSystem.addCar(honda);
rentalSystem.addCar(ford);
const customer1 = new Customer_1.default("John", "Doe", "DL1234");
const customer2 = new Customer_1.default("Sone", "Moe", "DL5678");
const startDate = new Date("2021-01-01");
const endDate = new Date("2021-01-10");
const availableCars = rentalSystem.searchCar("Toyota", "Camry", startDate, endDate);
availableCars.forEach(car => {
    console.log(`Car ${car.getName()} ${car.getModel()} is available for rent`);
});
if (availableCars.length > 0) {
    const reservation = rentalSystem.makeReservation(customer1, availableCars[0], startDate, endDate);
    console.log(`Reservation done with reservation id ${reservation.getReservationId()} and total price ${reservation.getTotalPrice()}`);
    if (reservation) {
        rentalSystem.processPayment(reservation);
    }
    else {
        console.log("Reservation failed");
    }
}
else {
    console.log("No cars available for rent");
}
