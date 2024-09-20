import Car from "../Car";

class LuxuryCar2 extends Car {

    constructor() {
        super();
        console.log("Luxury Car 2 is created");
    }

    getTopSpeed() {
        console.log("Top speed of Luxury Car is 200km/hr");
    }
    
    getCarName() {
        console.log("Luxury Car");
    }
}

export default LuxuryCar2;