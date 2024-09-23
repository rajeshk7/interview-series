import Vehicle from "./Vehicle";
import NormalDriveStratergy from "./Stratergy/NormalDrvieStratergy";

class NormalVehicle extends Vehicle {
    constructor() {
        super(new NormalDriveStratergy());
    }
}

export default NormalVehicle;