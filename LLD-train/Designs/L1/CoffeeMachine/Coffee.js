"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Coffee {
    constructor(name, ingredients, price) {
        this.name = name;
        this.ingredients = ingredients;
        this.price = price;
    }
    getName() {
        return this.name;
    }
    getPrice() {
        return this.price;
    }
    getRecipe() {
        return this.ingredients;
    }
}
exports.default = Coffee;
