import AbstractFactory from "./Interface/Abstractfactory";
import LuxuryCarFactory from "./Models/LuxuryCarFactory";
import EconomicCarFactory from "./Models/EconomicCarFactory";

class AbstractFactoryProducer {
    static getFactory(type: string): AbstractFactory {
        if (type === "Luxury") {
            return new LuxuryCarFactory();
        }
        else {
            return new EconomicCarFactory();
        }
    }
}

export default AbstractFactoryProducer;