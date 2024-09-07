import Robot from "./Robot";
import DataStore from "./DataStore";

class RoboticHuman implements Robot {
    type: string;
    info: DataStore;

    constructor(type: string, info: DataStore) {
        this.type = type;
        this.info = info;
    }

    getRobotType(): string {
        return this.type;
    }

    getInfo(): DataStore {
        return this.info;
    }

    print(row: number, col: number): void {
        console.log(`Prints a RoboticHuman at row ${row}, col ${col}`);
    }
}

export default RoboticHuman;