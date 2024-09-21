import VehicleCategory from "./VehicleCategory";

class Vehicle   {
    vehicleNumber: string;
    vehicleCategory: VehicleCategory;

    constructor(vehicleNumber: string, vehicleCategory: VehicleCategory) {
        this.vehicleNumber = vehicleNumber;
        this.vehicleCategory = vehicleCategory;
    }
}

export default Vehicle;