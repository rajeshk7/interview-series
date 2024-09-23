import Vehicle from "./Vehicle";
import VehicleType from "./VehicleType";

class Motorbike extends Vehicle {
    constructor(liscensePlate: string) {
        super(VehicleType.MOTORBIKE, liscensePlate);
    }
}

export default Motorbike;