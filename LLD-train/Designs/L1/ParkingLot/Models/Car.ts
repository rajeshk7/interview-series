import Vehicle from "./Vehicle";
import VehicleType from "./VehicleType";

class Car extends Vehicle {
    constructor(liscensePlate: string) {
        super(VehicleType.CAR, liscensePlate);
    }
}

export default Car;