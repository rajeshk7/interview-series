class Ingredients {
    name: string;
    quantity: number;

    constructor(name: string, quantity: number) {
        this.name = name;
        this.quantity = quantity;
    }

    getName(): string {
        return this.name;
    }

    getQuantity(): number {
        return this.quantity;
    }

    updateQuantity(quantity: number) {
        this.quantity += quantity;
    }
}

export default Ingredients;