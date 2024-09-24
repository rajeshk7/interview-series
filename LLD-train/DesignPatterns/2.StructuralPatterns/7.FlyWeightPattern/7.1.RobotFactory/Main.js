"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RobotFactory_1 = require("./RobotFactory");
// Added Map definition using npm i @types/node       
var doggoRobo = RobotFactory_1.default.getRobot("RoboticDog");
doggoRobo.print(1, 2);
var humanRobo = RobotFactory_1.default.getRobot("RoboticHuman");
humanRobo.print(3, 4);
var doggoRobo2 = RobotFactory_1.default.getRobot("RoboticDog");
doggoRobo2.print(5, 6);
var humanRobo2 = RobotFactory_1.default.getRobot("RoboticHuman");
humanRobo2.print(7, 8);
