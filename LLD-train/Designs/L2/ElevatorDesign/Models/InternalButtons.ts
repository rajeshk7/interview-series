import InternalDispatcher from '../InternalDispatcher';
import ElevatorCar from './ElevatorCar';

class InternalButtons {

  dispatcher: InternalDispatcher = new InternalDispatcher()
  availableButtons: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  selectedButton: number = 0

  pressButton = (nextFloor: number, elevatorCar: ElevatorCar) => {
    this.dispatcher.requestElevator(nextFloor, elevatorCar)
  }

}

export default InternalButtons;
