"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Signal_1 = __importDefault(require("./Signal"));
class TrafficController {
    constructor() {
        this.roads = new Map();
    }
    // Has to be synchronized in javas
    static getInstance() {
        if (!TrafficController.instance) {
            TrafficController.instance = new TrafficController();
        }
        return TrafficController.instance;
    }
    addRoad(road) {
        this.roads.set(road.getId(), road);
    }
    removeRoad(road) {
        this.roads.delete(road.getId());
    }
    startTrafficControl() {
        for (let road of this.roads.values()) {
            const trafficLight = road.getTrafficLight();
            const controlTraffic = () => {
                setTimeout(() => {
                    trafficLight === null || trafficLight === void 0 ? void 0 : trafficLight.changeSignal(Signal_1.default.GREEN);
                    setTimeout(() => {
                        trafficLight === null || trafficLight === void 0 ? void 0 : trafficLight.changeSignal(Signal_1.default.YELLOW);
                        setTimeout(() => {
                            trafficLight === null || trafficLight === void 0 ? void 0 : trafficLight.changeSignal(Signal_1.default.RED);
                            controlTraffic(); // Restart the cycle
                        }, trafficLight === null || trafficLight === void 0 ? void 0 : trafficLight.getYellowDuration());
                    }, trafficLight === null || trafficLight === void 0 ? void 0 : trafficLight.getGreenDuration());
                }, trafficLight === null || trafficLight === void 0 ? void 0 : trafficLight.getRedDuration());
            };
            controlTraffic(); // Start the cycle
        }
    }
    handleEmergency(roadId) {
        const road = this.roads.get(roadId);
        const trafficLight = road.getTrafficLight();
        trafficLight === null || trafficLight === void 0 ? void 0 : trafficLight.changeSignal(Signal_1.default.GREEN);
        console.log(`Emergency vehicle on ${road.getName()}. Traffic light on ${road.getName()} is GREEN now`);
    }
}
exports.default = TrafficController;
