import Road from "./Road";
import Signal from "./Signal";

class TrafficController {
    private static instance: TrafficController;
    private roads: Map<string, Road>;

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
        this.roads.set(road.getId(), road);
    }

    removeRoad(road: Road) {
        this.roads.delete(road.getId());
    }

    startTrafficControl()   {
        for (let road of this.roads.values()) {
            const trafficLight = road.getTrafficLight();

            const controlTraffic = () => {
                setTimeout(() => {
                    trafficLight?.changeSignal(Signal.GREEN);
                    setTimeout(() => {
                        trafficLight?.changeSignal(Signal.YELLOW);
                        setTimeout(() => {
                            trafficLight?.changeSignal(Signal.RED);
                            controlTraffic(); // Restart the cycle
                        }, trafficLight?.getYellowDuration());
                    }, trafficLight?.getGreenDuration());
                }, trafficLight?.getRedDuration());
            };

            controlTraffic(); // Start the cycle
        }
    }

    handleEmergency(roadId: string) {
        const road = this.roads.get(roadId) as Road;
        const trafficLight = road.getTrafficLight();
        trafficLight?.changeSignal(Signal.GREEN);
        console.log(`Emergency vehicle on ${road.getName()}. Traffic light on ${road.getName()} is GREEN now`);
    }
}

export default TrafficController;