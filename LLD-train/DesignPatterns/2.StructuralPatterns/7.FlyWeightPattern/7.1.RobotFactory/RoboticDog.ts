import Robot from "./Robot";
import DataStore from "./DataStore";

class RoboticDog implements Robot {
    type: string;
    info: DataStore;

    constructor(type: string, info: DataStore) {
        this.type = type;
        this.info = info;
    }

    getRobotType(): string {
        return this.type;
    }

    getRobotInfo(): DataStore {
        return this.info;
    }

    print(row: number, col: number): void {
        console.log(`Prints a RoboticDog at row ${row}, col ${col}`);
    }
}

export default RoboticDog;