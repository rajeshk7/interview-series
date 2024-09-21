import ExternalDispatcher from "../ExternalDispatcher";
import Direction from "../Interface/Direction";

class Floor {
    floorNumber: number;
    externalDispatcher: ExternalDispatcher;

    constructor(floor : number) {
        this.floorNumber = floor;
        this.externalDispatcher = new ExternalDispatcher();
    }

    pressButton = (floor: number, direction: Direction) => {
        console.log("[Floor] : Floor " + this.floorNumber + " pressed button to go to floor " + floor);
        this.floorNumber = floor;
        this.externalDispatcher.requestElevator(this.floorNumber, direction);
    }
}

export default Floor;
