import Direction from "./Interface/Direction";
import ElevatorCar from "./Models/ElevatorCar";

const PriorityQueue = require('js-priority-queue');

class ElevatorController {
    elevatorCar: ElevatorCar;
    upMinPQ: any;
    downLowPQ: any;

    constructor(elevatorCar: ElevatorCar) {
        this.elevatorCar = elevatorCar;
        this.upMinPQ = new PriorityQueue({ comparator: (a: number, b: number) => a - b });
        this.downLowPQ = new PriorityQueue({ comparator: (a: number, b: number) => b - a });
        this.controlElevator();
    }

    submitExternalRequest = (floorNumber: number, direction: number) => {
        console.log(`\n[ElevatorController.submitExternalRequest] Elevator ${this.elevatorCar.id} received external request to floor ${floorNumber} with direction ${direction}`);
        if (direction === Direction.UP) {
            this.upMinPQ.queue(floorNumber);
        } else {
            this.downLowPQ.queue(floorNumber);
        }
    }

    submitInternalRequest = (floorNumber: number, queue: any) => {
        console.log(`[ElevatorController.submitInternalRequest] Elevator ${this.elevatorCar.id} processing internal request to floor ${floorNumber}`);
        this.elevatorCar.moveToFloor(floorNumber);
        this.elevatorCar.elevatorDoor.openDoor();
        this.elevatorCar.showDisplay();
        queue.dequeue();
    }

    controlElevator = () => {
        console.log("\n[ElevatorController.controlElevator] Starting elevator control loop");
        setInterval(() => {
            if (this.elevatorCar.direction === Direction.UP && this.upMinPQ.length > 0) {
                this.submitInternalRequest(this.upMinPQ.peek(), this.upMinPQ);
            } else if (this.elevatorCar.direction === Direction.DOWN && this.downLowPQ.length > 0) {
                this.submitInternalRequest(this.downLowPQ.peek(), this.downLowPQ);
            }
        }, 2000); // Check every second
    }
}

export default ElevatorController;