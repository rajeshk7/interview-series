"use strict";
var VehicleType;
(function (VehicleType) {
    VehicleType[VehicleType["CAR"] = 0] = "CAR";
    VehicleType[VehicleType["TRUCK"] = 1] = "TRUCK";
    VehicleType[VehicleType["JEEP"] = 2] = "JEEP";
})(VehicleType || (VehicleType = {}));
class Vehicle {
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }
}
class Car extends Vehicle {
    constructor(name) {
        super(name, VehicleType.CAR);
    }
}
class Truck extends Vehicle {
    constructor(name) {
        super(name, VehicleType.TRUCK);
    }
}
class Jeep extends Vehicle {
    constructor(name) {
        super(name, VehicleType.JEEP);
    }
}
class ParkingSlot {
    constructor(type, number) {
        this.vehicle = null;
        this.type = type;
        this.id = number;
    }
    isAvailable() {
        return this.vehicle == null;
    }
    parkVehicle(vehicle) {
        if (this.type == vehicle.type && this.vehicle == null) {
            this.vehicle = vehicle;
            return true;
        }
        return false;
    }
    unparkVehicle() {
        if (this.vehicle != null) {
            this.vehicle = null;
            return true;
        }
        return false;
    }
}
class Level {
    constructor(id, totalSlots) {
        this.id = id;
        this.slots = new Array(totalSlots);
        const totalCars = Math.floor(0.5 * totalSlots);
        const totalJeeps = Math.floor(0.3 * totalSlots);
        console.log("Total " + totalCars + " " + totalJeeps + " " + (totalSlots - totalCars - totalJeeps));
        let index = 0;
        for (; index < totalCars; index++)
            this.slots[index] = new ParkingSlot(VehicleType.CAR, this.id + index);
        for (; index < totalJeeps + totalCars; index++)
            this.slots[index] = new ParkingSlot(VehicleType.JEEP, this.id + index);
        for (; index < totalSlots; index++)
            this.slots[index] = new ParkingSlot(VehicleType.TRUCK, this.id + index);
    }
    parkVehicle(vehicle) {
        for (const slot of this.slots)
            if (slot.isAvailable() && slot.type == vehicle.type)
                return slot.parkVehicle(vehicle);
        return false;
    }
    unparkVehicle(vehcile) {
        for (const slot of this.slots)
            if (slot.vehicle == vehcile)
                return slot.unparkVehicle();
        return false;
    }
    displaySlots() {
        console.log(`Level ${this.id} availability:`);
        for (const spot of this.slots)
            console.log(`Spot ${spot.id} - ${spot.isAvailable() ? 'Available' : 'Occupied'} - ${spot.type}`);
    }
}
class ParkingLot {
    constructor() {
        this.levels = [];
    }
    static getInstance() {
        if (this.instance == null)
            this.instance = new ParkingLot();
        return this.instance;
    }
    addLevel(id, capacity) {
        this.levels.push(new Level(id, capacity));
    }
    parkVehicle(vehcile) {
        for (const level of this.levels)
            if (level.parkVehicle(vehcile)) {
                console.log(" Vehicle parked at level " + level.id);
                return;
            }
        console.log("Cannot park vehicle");
    }
    unparkVehcile(vehcile) {
        for (const level of this.levels)
            if (level.unparkVehicle(vehcile)) {
                console.log("Unparked from level " + level.id);
                return;
            }
        console.log("Not able to unpark it ");
    }
    displayCapacity() {
        for (const level of this.levels)
            level.displaySlots();
    }
}
const parkingLot = ParkingLot.getInstance();
const car = new Car("Bolero");
const truck = new Truck("Tata");
const jeep = new Jeep("Compass");
parkingLot.addLevel(0, 5);
parkingLot.addLevel(1, 5);
parkingLot.parkVehicle(car);
parkingLot.parkVehicle(truck);
parkingLot.parkVehicle(jeep);
parkingLot.displayCapacity();
parkingLot.unparkVehcile(car);
parkingLot.displayCapacity();
