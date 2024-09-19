import DriveStratergy from "./DriveStratergy";

class NormalDriveStratergy implements DriveStratergy {
    drive(): void {
        console.log("Driving normally");
    }
}

export default NormalDriveStratergy;