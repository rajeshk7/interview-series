"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Signal_1 = __importDefault(require("./Signal"));
class TrafficLight {
    constructor(id, redDuration, yellowDuration, greenDuration) {
        this.id = id;
        this.redDuration = redDuration;
        this.yellowDuration = yellowDuration;
        this.greenDuration = greenDuration;
        this.currentSignal = Signal_1.default.RED;
    }
    changeSignal(signal) {
        this.currentSignal = signal;
        switch (signal) {
            case Signal_1.default.RED:
                console.log(`${"\u001B[31m" /* Color.fgRed */}Traffic Light ${this.id} is RED${"\u001B[0m" /* Color.reset */}`);
                break;
            case Signal_1.default.YELLOW:
                console.log(`${"\u001B[33m" /* Color.fgYellow */}Traffic Light ${this.id} is YELLOW${"\u001B[0m" /* Color.reset */}`);
                break;
            case Signal_1.default.GREEN:
                console.log(`${"\u001B[32m" /* Color.fgGreen */}Traffic Light ${this.id} is GREEN${"\u001B[0m" /* Color.reset */}`);
                break;
        }
        this.notifyObservers();
    }
    getCurrentSignal() {
        return this.currentSignal;
    }
    getRedDuration() {
        return this.redDuration;
    }
    getYellowDuration() {
        return this.yellowDuration;
    }
    getGreenDuration() {
        return this.greenDuration;
    }
    setRedDuration(redDuration) {
        this.redDuration = redDuration;
    }
    setYellowDuration(yellowDuration) {
        this.yellowDuration = yellowDuration;
    }
    setGreenDuration(greenDuration) {
        this.greenDuration = greenDuration;
    }
    notifyObservers() {
        console.log(`Traffic Light ${this.id} is ${this.currentSignal}`);
    }
}
exports.default = TrafficLight;
