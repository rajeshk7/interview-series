import Product from "../Model/Product";
import ProductType from "../Model/ProductType";
import CouponDecorator from "../Model/CouponDecorator";

class TypeCouponDecorator extends CouponDecorator {
    product: Product;
    discountPercentage: number;

    constructor(product: Product, discountPercentage: number) {
        super(product.name, product.price, product.type);
        this.product = product;
        this.discountPercentage = discountPercentage;
    }    

    getPrice(): number {
        return this.product.getPrice() * (1 - this.discountPercentage / 100);
    }    
}

export default TypeCouponDecorator;