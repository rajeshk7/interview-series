import Car from "../Car"

interface AbstractFactory {
    getInstance(price: number): Car;
}

export default AbstractFactory;