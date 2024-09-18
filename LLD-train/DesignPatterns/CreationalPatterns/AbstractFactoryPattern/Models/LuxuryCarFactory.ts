import AbstractFactory from "../Interface/Abstractfactory";
import LuxuryCar1 from "./LuxuryCar1";
import LuxuryCar2 from "./LuxuryCar2";

class LuxuryCarFactory implements AbstractFactory {
    getInstance(price: number) {
        if (price > 500000) {
            return new LuxuryCar1();
        }
        else {
            return new LuxuryCar2();
        }
    }
}

export default LuxuryCarFactory;