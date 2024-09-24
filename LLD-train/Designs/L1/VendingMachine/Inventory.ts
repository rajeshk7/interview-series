import Product from "./Product";

class Inventory {
    private products: Map<Product, number>;

    constructor() {
        this.products = new Map();
    }

    addProduct(product: Product, quantity: number) {
        this.products.set(product, (this.products.get(product) ?? 0) + quantity);
    }

    removeProduct(product: Product) {
        this.products.delete(product);
    }

    updateQuantity(product: Product, quantity: number) {
        this.products.set(product, quantity);
    }

    getQuantity(product: Product) {
        return this.products.get(product);
    }

    isAvailable(product: Product) {
        return this.products.has(product) && (this.products.get(product) ?? 0) > 0;
    }

}

export default Inventory;