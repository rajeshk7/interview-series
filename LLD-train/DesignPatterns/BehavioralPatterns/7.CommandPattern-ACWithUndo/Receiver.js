"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AirConditioner = /** @class */ (function () {
    function AirConditioner() {
        this.temperature = 25;
        this.state = false;
    }
    AirConditioner.prototype.turnOn = function () {
        this.state = true;
        console.log("\u001B[95m" /* Color.fgBrightMagenta */ + "AC is ON" + "\u001B[0m" /* Color.reset */);
    };
    AirConditioner.prototype.turnOff = function () {
        this.state = false;
        console.log("\u001B[97m" /* Color.fgBrightWhite */ + "AC is OFF" + "\u001B[0m" /* Color.reset */);
    };
    AirConditioner.prototype.increaseTemperature = function () {
        this.temperature++;
        console.log("\u001B[36m" /* Color.fgCyan */ + "Temperature is now: " + this.temperature + "\u001B[0m" /* Color.reset */);
    };
    AirConditioner.prototype.decreaseTemperature = function () {
        this.temperature--;
        console.log("\u001B[36m" /* Color.fgCyan */ + "Temperature is now: " + this.temperature + "\u001B[0m" /* Color.reset */);
    };
    return AirConditioner;
}());
exports.default = AirConditioner;
