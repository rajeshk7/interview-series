import Car from "../Car";

class EconomicCar2 extends Car {

    constructor() {
        super();
        console.log("Economic Car 2 is created");
    }
    
    getTopSpeed() {
        console.log("Top speed of Economic Car 2 is 80 km/hr");
    }

    getCarName(): void {
        console.log("Economic Car 2");
    }
}

export default EconomicCar2;