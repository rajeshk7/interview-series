import Car from "../Car";

class EconomicCar1 extends Car {

    constructor() {
        super();
        console.log("Economic Car 1 is created");
    }

    getTopSpeed() {
        console.log("Top speed of Economic Car 1 is 70 km/hr");
    }

    getCarName(): void {
        console.log("Economic Car 1");
    }
}

export default EconomicCar1;