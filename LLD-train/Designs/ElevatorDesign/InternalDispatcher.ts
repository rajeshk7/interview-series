import ElevatorCar from "./Models/ElevatorCar";
import ElevatorController from "./ElevatorController";
import Direction from "./Interface/Direction";

class InternalDispatcher  {
    elevatorController: ElevatorController[] = []

    requestElevator = (destination: number, elevatorCar: ElevatorCar) => {
        for (let i = 0; i < this.elevatorController.length; i++) {
            const elevatorController = this.elevatorController[i];
            if(elevatorController.elevatorCar.id === elevatorCar.id) {
                elevatorController.submitExternalRequest(destination, Direction.UP);
            }
        }
    }
}

export default InternalDispatcher;
