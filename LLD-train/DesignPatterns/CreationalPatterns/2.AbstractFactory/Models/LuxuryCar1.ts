import Car from "../Car";

class LuxuryCar1 extends Car {

    constructor() {
        super();
        console.log("Luxury Car 1 is created");
    }

    getTopSpeed(): void {
        console.log("Top speed of Luxury Car is 200km/hr");
    }

    getCarName(): void {
        console.log("Luxury Car");
    }
}

export default LuxuryCar1;