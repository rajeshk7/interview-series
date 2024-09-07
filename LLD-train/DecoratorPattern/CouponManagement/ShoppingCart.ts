import Product from "./Model/Product";
import TypeCouponDecorator from "./Implementation/TypeCouponDecorator";
import PercentageCouponDecorator from "./Implementation/PercentageCouponDecorator";
import Color from "../../ConsoleColors";

class ShoppingCart {
    products: Product[];

    constructor() {
        this.products = [];
    }

    addTOCart(product: Product): void {
        console.log(Color.fgBrightGreen + `Adding ${product.getName()} to the cart` + Color.reset);
        console.log(Color.fgBrightRed + "Price: " + product.getPrice() + Color.reset + "\n");
        this.products.push(new TypeCouponDecorator(new PercentageCouponDecorator(product, 10), 20, product.getType()));
    }

    getTotalPrice(): number {
        return this.products.reduce((acc, product) => acc + product.getPrice(), 0);
    }
}

export default ShoppingCart;