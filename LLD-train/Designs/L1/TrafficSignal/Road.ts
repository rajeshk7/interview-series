import TrafficLight from "./TrafficLight";

class Road {
    private id: string;
    private trafficLight: TrafficLight | null;
    private name: string;

    constructor(id: string, name: string) {
        this.id = id;
        this.name = name;
        this.trafficLight = null
    }

    setTrafficLight(trafficLight: TrafficLight) {
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

export default Road;