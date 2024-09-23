import Vehicle from "./Vehicle";
import VehicleType from "./VehicleType";

class Truck extends Vehicle {
    constructor(liscensePlate: string) {
        super(VehicleType.TRUCK, liscensePlate);
    }
}

export default Truck;