import ProductType from "./ProductType";

abstract class Product {
    name: string;
    price: number;
    type: ProductType;

    constructor(name: string, price: number, type: ProductType) {
        this.name = name;
        this.price = price;
        this.type = type;
    }

    abstract getPrice(): number;

    getType(): ProductType {
        return this.type;
    }

    getName(): string {
        return this.name;
    }
}

export default Product;