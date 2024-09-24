import Ingredients from "./Ingredients";

class Coffee    {
    name: string;
    price: number;
    ingredients: Map<Ingredients, number>;

    constructor(name: string, ingredients: Map<Ingredients, number>, price: number) {
        this.name = name;
        this.ingredients = ingredients
        this.price = price;
    }

    getName(): string {
        return this.name;
    }

    getPrice(): number {
        return this.price;
    }

    getRecipe(): Map<Ingredients, number> {
        return this.ingredients;
    }
}

export default Coffee;