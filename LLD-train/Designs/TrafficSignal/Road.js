"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Road {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.trafficLight = null;
    }
    setTrafficLight(trafficLight) {
        this.trafficLight = trafficLight;
    }
    getTrafficLight() {
        return this.trafficLight;
    }
    getId() {
        return this.id;
    }
    getName() {
        return this.name;
    }
}
exports.default = Road;
