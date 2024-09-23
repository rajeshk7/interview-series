import DriveStratergy from "./Stratergy/DriveStratergy";

class Vehicle {
    private driveStratergy: DriveStratergy;

    constructor(driveStratergy: DriveStratergy) {
        this.driveStratergy = driveStratergy;
    }

    drive(): void {
        this.driveStratergy.drive();
    }
}

export default Vehicle;