import Iterator from "../Interface/Iterator";

class CarIterator implements Iterator {
    index: number = 0;
    cars: any[] = [];

    constructor(cars: any[]) {
        this.cars = cars;
    }

    hasNext(): boolean {
        return this.index < this.cars.length;
    }

    next(): any {
        return this.hasNext() ? this.cars[this.index++] : null;
    }
}

export default CarIterator;