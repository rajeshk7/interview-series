"use strict";
var SignalType;
(function (SignalType) {
    SignalType[SignalType["RED"] = 0] = "RED";
    SignalType[SignalType["YELLOW"] = 1] = "YELLOW";
    SignalType[SignalType["GREEN"] = 2] = "GREEN";
})(SignalType || (SignalType = {}));
class TrafficSignal {
    constructor(id, redDuration, yellowDuration, greenDuration) {
        this.id = id;
        this.redDuration = redDuration;
        this.yellowDuration = yellowDuration;
        this.greenDuration = greenDuration;
        this.currentSignal = SignalType.RED;
    }
    changeSignal() {
        switch (this.currentSignal) {
            case SignalType.RED:
                this.currentSignal = SignalType.GREEN;
                break;
            case SignalType.GREEN:
                this.currentSignal = SignalType.YELLOW;
                break;
            case SignalType.YELLOW:
                this.currentSignal = SignalType.RED;
                break;
        }
    }
}
class Road {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.trafficLight = null;
    }
    setTrafficeSignal(signal) {
        this.trafficLight = signal;
    }
    setTrafficeSignalType(SignalType) {
        var _a;
        (_a = this.trafficLight) === null || _a === void 0 ? void 0 : _a.changeSignal();
    }
}
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
        this.roads.set(road.id, road);
    }
    removeRoad(road) {
        this.roads.delete(road.id);
    }
    startTrafficControl() {
        for (let road of this.roads.values()) {
            const trafficLight = road.trafficLight;
            const controlTraffic = () => {
                setTimeout(() => {
                    trafficLight === null || trafficLight === void 0 ? void 0 : trafficLight.changeSignal();
                    setTimeout(() => {
                        trafficLight === null || trafficLight === void 0 ? void 0 : trafficLight.changeSignal();
                        setTimeout(() => {
                            trafficLight === null || trafficLight === void 0 ? void 0 : trafficLight.changeSignal();
                            controlTraffic(); // Restart the cycle
                        }, trafficLight === null || trafficLight === void 0 ? void 0 : trafficLight.yellowDuration);
                    }, trafficLight === null || trafficLight === void 0 ? void 0 : trafficLight.greenDuration);
                }, trafficLight === null || trafficLight === void 0 ? void 0 : trafficLight.redDuration);
            };
            controlTraffic(); // Start the cycle
        }
    }
}
const trafficController = TrafficController.getInstance();
const road1 = new Road("1", "Road 1");
const road2 = new Road("2", "Road 2");
const road3 = new Road("3", "Road 3");
const road4 = new Road("4", "Road 4");
const trafficLight1 = new TrafficSignal("1", 1000, 200, 1000);
const trafficLight2 = new TrafficSignal("2", 2000, 200, 1000);
const trafficLight3 = new TrafficSignal("3", 3000, 200, 1000);
const trafficLight4 = new TrafficSignal("4", 4000, 200, 1000);
road1.setTrafficeSignal(trafficLight1);
road2.setTrafficeSignal(trafficLight2);
road3.setTrafficeSignal(trafficLight3);
road4.setTrafficeSignal(trafficLight4);
trafficController.addRoad(road1);
trafficController.addRoad(road2);
trafficController.addRoad(road3);
trafficController.addRoad(road4);
trafficController.startTrafficControl();
