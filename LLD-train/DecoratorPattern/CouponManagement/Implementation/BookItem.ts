import Product from "../Model/Product";
import ProductType from "../Model/ProductType";

class BookItem extends Product {
    constructor(name: string, price: number) {
        super(name, price, ProductType.BOOKS);
    }

    getPrice(): number {
        return this.price;
    }
}

export default BookItem;