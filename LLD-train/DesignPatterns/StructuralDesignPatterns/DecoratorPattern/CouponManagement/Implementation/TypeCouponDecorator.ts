import CouponDecorator from "../Model/CouponDecorator";
import Product from "../Model/Product";
import ProductType from "../Model/ProductType";

class TypeCouponDecorator extends CouponDecorator {
    product: Product;
    discountPercentage: number;
    type: ProductType;
    static eligibleTypes: ProductType[] = [ProductType.ELECTRONIC, ProductType.FOOD, ProductType.CLOTHING];

    constructor(product: Product, discountPercentage: number, type: ProductType) {
        super(product.name, product.price, product.type);
        this.product = product;
        this.discountPercentage = discountPercentage;
        this.type = type;
    }    

    getPrice(): number {
        if (TypeCouponDecorator.eligibleTypes.includes(this.product.type)) {
            return this.product.getPrice() * (1 - this.discountPercentage / 100);
        }
        return this.product.getPrice();
    }    
}

export default TypeCouponDecorator;