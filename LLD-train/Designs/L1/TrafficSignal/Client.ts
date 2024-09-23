import TrafficController from "./TrafficController";
import Road from "./Road";
import TrafficLight from "./TrafficLight";

const trafficController = TrafficController.getInstance();

const road1 = new Road("1", "Road 1");
const road2 = new Road("2", "Road 2");
const road3 = new Road("3", "Road 3");
const road4 = new Road("4", "Road 4");

const trafficLight1 = new TrafficLight("1", 1000, 200, 1000);
const trafficLight2 = new TrafficLight("2", 2000, 200, 1000);
const trafficLight3 = new TrafficLight("3", 3000, 200, 1000);
const trafficLight4 = new TrafficLight("4", 4000, 200, 1000);

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