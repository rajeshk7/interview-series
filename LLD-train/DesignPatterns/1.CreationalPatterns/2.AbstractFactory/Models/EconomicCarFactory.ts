import Car from "../Car";
import AbstractFactory from "../Interface/Abstractfactory";
import EconomicCar1 from "./EconomicCar1";
import EconomicCar2 from "./EconomicCar2";

class EconomicCarFactory implements AbstractFactory {
    getInstance(price: number): Car {
        if (price < 160000) {
            return new EconomicCar1();
        }
        else {
            return new EconomicCar2();
        }
    }
}

export default EconomicCarFactory;