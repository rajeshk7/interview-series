"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ParkingSlot_1 = __importDefault(require("./ParkingSlot"));
const ParkingSlotType_1 = __importDefault(require("./Models/ParkingSlotType"));
const ParkingFloor_1 = __importDefault(require("./ParkingFloor"));
const ParkingLot_1 = __importDefault(require("./ParkingLot"));
const Vehicle_1 = __importDefault(require("./Models/Vehicle"));
const VehicleCategory_1 = __importDefault(require("./Models/VehicleCategory"));
const parkingLotName = "ParkingLot";
const parkingLotAddress = "123, ABC Street, XYZ City";
const allSlots = new Map();
const compactSlot = new Map();
compactSlot.set("1", new ParkingSlot_1.default("1", ParkingSlotType_1.default.Compact));
compactSlot.set("2", new ParkingSlot_1.default("2", ParkingSlotType_1.default.Compact));
allSlots.set(ParkingSlotType_1.default.Compact, compactSlot);
const twoWheelerSlot = new Map();
twoWheelerSlot.set("1", new ParkingSlot_1.default("1", ParkingSlotType_1.default.TwoWheeler));
twoWheelerSlot.set("2", new ParkingSlot_1.default("2", ParkingSlotType_1.default.TwoWheeler));
allSlots.set(ParkingSlotType_1.default.TwoWheeler, twoWheelerSlot);
const largeSlot = new Map();
largeSlot.set("1", new ParkingSlot_1.default("1", ParkingSlotType_1.default.Large));
largeSlot.set("2", new ParkingSlot_1.default("2", ParkingSlotType_1.default.Large));
allSlots.set(ParkingSlotType_1.default.Large, largeSlot);
const parkingFloor = new ParkingFloor_1.default("1", allSlots);
const parkingFloors = [parkingFloor];
parkingFloors.push(parkingFloor);
const parkingLot = ParkingLot_1.default.getInstance(parkingLotName, parkingLotAddress, parkingFloors);
const vehicle = new Vehicle_1.default("KA-01-HH-1234", VehicleCategory_1.default.Compact);
const ticket = parkingLot.assignTicket(vehicle);
setTimeout(() => {
    console.log("Price " + parkingLot.scanAndPay(ticket));
}, 1000);
