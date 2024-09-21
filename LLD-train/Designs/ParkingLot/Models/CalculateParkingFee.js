"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateParkingFee = void 0;
const ParkingSlotType_1 = __importDefault(require("./ParkingSlotType"));
const calculateParkingFee = (slotType, hours) => {
    switch (slotType) {
        case ParkingSlotType_1.default.TwoWheeler:
            return hours * 10;
        case ParkingSlotType_1.default.Compact:
            return hours * 20;
        case ParkingSlotType_1.default.Medium:
            return hours * 30;
        case ParkingSlotType_1.default.Large:
            return hours * 40;
    }
};
exports.calculateParkingFee = calculateParkingFee;
exports.default = exports.calculateParkingFee;
