"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Ingredients {
    constructor(name, quantity) {
        this.name = name;
        this.quantity = quantity;
    }
    getName() {
        return this.name;
    }
    getQuantity() {
        return this.quantity;
    }
    updateQuantity(quantity) {
        this.quantity += quantity;
    }
}
exports.default = Ingredients;
