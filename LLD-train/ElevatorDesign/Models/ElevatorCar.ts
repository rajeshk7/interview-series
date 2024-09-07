import Direction from '../Interface/Direction';
import ElevatorState from '../Interface/ElevatorState';
import ElevatorDisplay from './ElevatorDisplay';
import ElevatorDoor from './ElevatorDoor';
import InternalButtons from './InternalButtons';

class ElevatorCar   {
    id: number;
    elevatorDisplay: ElevatorDisplay;
    internalButtons: InternalButtons
    elevatorState: ElevatorState
    currentFLoor: number;
    direction: Direction;
    elevatorDoor: ElevatorDoor;

    constructor(id: number) {
        this.id = id;
        this.elevatorDisplay = new ElevatorDisplay();
        this.internalButtons = new InternalButtons();
        this.elevatorState = ElevatorState.IDLE;
        this.currentFLoor = 0;
        this.direction = Direction.UP;
        this.elevatorDoor = new ElevatorDoor();
    }

    showDisplay = () => {
        this.elevatorDisplay.showDisplay(this.currentFLoor, this.direction);
    }

    pressButton = (nextFloor: number) => {
        this.internalButtons.pressButton(nextFloor, this);
    }

    setDisplay = () => {
        this.elevatorDisplay.setDisplay(this.currentFLoor, this.direction);
    }

    moveToFloor(nextFloor: number): boolean {
        const move = (start: number, end: number, step: number) => {
            for (let i = start; i !== end; i += step) {
                this.elevatorState = ElevatorState.MOVING;
                this.currentFLoor = i;
                this.setDisplay();
                this.showDisplay();
            }
            if (this.currentFLoor === nextFloor) {
                this.elevatorDoor.openDoor();
                this.elevatorState = ElevatorState.IDLE;
                return true;
            }
            return false;
        };

        const startFloor = this.currentFLoor;
        if (this.direction === Direction.UP) {
            return move(startFloor, nextFloor + 1, 1);
        } else if (this.direction === Direction.DOWN) {
            return move(startFloor, nextFloor - 1, -1);
        }

        return false;
    }
}

export default ElevatorCar;
