import VehicleType from "./VehicleType";

class Vehicle {
    private type: VehicleType;
    private liscensePlate: string;

    constructor(type: VehicleType, liscensePlate: string) {
        this.type = type;
        this.liscensePlate = liscensePlate;
    }

    getType() {
        return this.type;
    }

    getLiscensePlate() {
        return this.liscensePlate;
    }
}

export default Vehicle;