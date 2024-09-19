import CarIterator from "./CarIterator";
import Car from "./Car";
import Aggregator from "../Interface/Aggregator";
import Iterator from "../Interface/Iterator";

class ShowRoom implements Aggregator {
    private cars: Car[] = [];

    constructor(cars: Car[] = []) {
        this.cars = cars;
    }

    addCar(car: Car): void {
        this.cars.push(car);
    }

    createIterator(): Iterator {
        return new CarIterator(this.cars);
    }
}

export default ShowRoom;