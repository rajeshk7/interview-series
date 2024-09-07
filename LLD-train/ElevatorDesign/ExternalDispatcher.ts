import Direction from "./Interface/Direction";
import ElevatorController from "./ElevatorController";
import ElevatorCreator from "./ElevatorCreator";

class ExternalDispatcher {
    elevatorCreator: ElevatorCreator = new ElevatorCreator(2);
    elevatorControllerList: ElevatorController[] = this.elevatorCreator.elevatorControllerList;
    lastElevatorIndex: number = -1;

    requestElevator = (floorNumber: number, direction: Direction) => {
        // Alternate between elevators
        this.lastElevatorIndex = (this.lastElevatorIndex + 1) % this.elevatorControllerList.length;
        const elevatorController = this.elevatorControllerList[this.lastElevatorIndex];
        const elevatorId = elevatorController.elevatorCar.id;

        console.log(`[ExternalDispatcher] Elevator ${elevatorId} is going to floor ${floorNumber}`);
        elevatorController.submitExternalRequest(floorNumber, direction);
    }
}

export default ExternalDispatcher;