import Vehicle from "./Vehicle";
import SportsDriveStratergy from "./Stratergy/SportsDrvieStratergy";

class SportsVehicle extends Vehicle {
    constructor() {
        super(new SportsDriveStratergy());
    }
}

export default SportsVehicle;