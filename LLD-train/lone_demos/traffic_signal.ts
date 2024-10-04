enum SignalType {
    RED,
    YELLOW,
    GREEN
}

class TrafficSignal {
    currentSignal: SignalType;
    redDuration: number;
    yellowDuration: number;
    greenDuration: number;
    id: string;

    constructor(id: string, redDuration: number, yellowDuration: number, greenDuration: number) {
        this.id = id;
        this.redDuration = redDuration;
        this.yellowDuration = yellowDuration;
        this.greenDuration = greenDuration;
        this.currentSignal = SignalType.RED;
    }

    changeSignal() {
        switch(this.currentSignal) {
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
    id: string;
    trafficLight: TrafficSignal | null;
    name: string;

    constructor(id: string, name: string) {
        this.id = id;
        this.name = name;
        this.trafficLight = null
    }

    setTrafficeSignal(signal: TrafficSignal) {
        this.trafficLight = signal
    }

    setTrafficeSignalType(SignalType: SignalType) {
        this.trafficLight?.changeSignal()
    }
}

class TrafficController {
    static instance: TrafficController;
    roads: Map<string, Road>;

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

    addRoad(road: Road) {
        this.roads.set(road.id, road);
    }

    removeRoad(road: Road) {
        this.roads.delete(road.id);
    }

    startTrafficControl()   {
        for (let road of this.roads.values()) {
            const trafficLight = road.trafficLight;

            const controlTraffic = () => {
                setTimeout(() => {
                    trafficLight?.changeSignal();
                    setTimeout(() => {
                        trafficLight?.changeSignal();
                        setTimeout(() => {
                            trafficLight?.changeSignal();
                            controlTraffic(); // Restart the cycle
                        }, trafficLight?.yellowDuration);
                    }, trafficLight?.greenDuration);
                }, trafficLight?.redDuration);
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
