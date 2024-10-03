"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Car {
    constructor(name, model, year, lisencePlate, rentalPricePerDay) {
        this.name = name;
        this.model = model;
        this.year = year;
        this.lisencePlate = lisencePlate;
        this.rentalPricePerDay = rentalPricePerDay;
        this.available = true;
    }
    getName() {
        return this.name;
    }
    getModel() {
        return this.model;
    }
    getYear() {
        return this.year;
    }
    getLisencePlate() {
        return this.lisencePlate;
    }
    getRentalPricePerDay() {
        return this.rentalPricePerDay;
    }
    isAvailable() {
        return this.available;
    }
    setAvailable(available) {
        this.available = available;
    }
}
exports.default = Car;
