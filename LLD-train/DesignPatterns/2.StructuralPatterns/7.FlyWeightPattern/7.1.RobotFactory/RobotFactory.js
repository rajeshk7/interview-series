"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DataStore_1 = require("./DataStore");
var RoboticDog_1 = require("./RoboticDog");
var RoboticHuman_1 = require("./RoboticHuman");
var RobotFactory = /** @class */ (function () {
    function RobotFactory() {
    }
    RobotFactory.getRobot = function (type) {
        if (!this.robotFactory.has(type)) {
            console.log("\u001B[95m" /* Color.fgBrightMagenta */ + "Creating a new ".concat(type, " robot") + "\u001B[0m" /* Color.reset */);
            if (type === "RoboticDog") {
                var robot = new RoboticDog_1.default(type, new DataStore_1.default());
                this.robotFactory.set(type, robot);
            }
            if (type === "RoboticHuman") {
                var robot = new RoboticHuman_1.default(type, new DataStore_1.default());
                this.robotFactory.set(type, robot);
            }
        }
        else
            console.log("\u001B[93m" /* Color.fgBrightYellow */ + "Using existing ".concat(type, " robot") + "\u001B[0m" /* Color.reset */);
        return this.robotFactory.get(type);
    };
    RobotFactory.robotFactory = new Map();
    return RobotFactory;
}());
exports.default = RobotFactory;
