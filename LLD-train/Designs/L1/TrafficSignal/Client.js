"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const TrafficController_1 = __importDefault(require("./TrafficController"));
const Road_1 = __importDefault(require("./Road"));
const TrafficLight_1 = __importDefault(require("./TrafficLight"));
const trafficController = TrafficController_1.default.getInstance();
const road1 = new Road_1.default("1", "Road 1");
const road2 = new Road_1.default("2", "Road 2");
const road3 = new Road_1.default("3", "Road 3");
const road4 = new Road_1.default("4", "Road 4");
const trafficLight1 = new TrafficLight_1.default("1", 1000, 200, 1000);
const trafficLight2 = new TrafficLight_1.default("2", 2000, 200, 1000);
const trafficLight3 = new TrafficLight_1.default("3", 3000, 200, 1000);
const trafficLight4 = new TrafficLight_1.default("4", 4000, 200, 1000);
road1.setTrafficLight(trafficLight1);
road2.setTrafficLight(trafficLight2);
road3.setTrafficLight(trafficLight3);
road4.setTrafficLight(trafficLight4);
trafficController.addRoad(road1);
trafficController.addRoad(road2);
trafficController.addRoad(road3);
trafficController.addRoad(road4);
trafficController.startTrafficControl();
setTimeout(() => {
    trafficController.handleEmergency("2");
}, 10000);
