import ElevatorController from "./ElevatorController";
import ElevatorCar from "./Models/ElevatorCar";
class ElevatorCreator {
    elevatorControllerList: ElevatorController[] = []
    
    constructor(totalCars: number)  {
        for (let i = 0; i < totalCars; i++) {
            const elevatorCar = new ElevatorCar(i);
            const elevatorController = new ElevatorController(elevatorCar);
            this.elevatorControllerList.push(elevatorController);
        }
    }

}

export default ElevatorCreator;