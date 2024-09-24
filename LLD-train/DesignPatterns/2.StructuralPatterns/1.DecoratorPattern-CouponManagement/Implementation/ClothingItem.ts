import Product from "../Model/Product";
import ProductType from "../Model/ProductType";

class ClothingItem extends Product {
    constructor(name: string, price: number) {
        super(name, price, ProductType.CLOTHING);
    }

    getPrice(): number {
        return this.price;
    }
}

export default ClothingItem;