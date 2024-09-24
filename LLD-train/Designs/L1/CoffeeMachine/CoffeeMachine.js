"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Coffee_1 = __importDefault(require("./Coffee"));
const Ingredients_1 = __importDefault(require("./Ingredients"));
class CoffeeMachine {
    constructor() {
        this.ingredients = new Map();
        this.coffeeMenu = [];
        // Initialize coffee menu and ingredients
        this.initializeIngredients();
        this.initializeCoffeeMenu();
    }
    static getInstance() {
        if (!CoffeeMachine.instance) {
            CoffeeMachine.instance = new CoffeeMachine();
        }
        return CoffeeMachine.instance;
    }
    initializeIngredients() {
        this.ingredients.set("coffee", new Ingredients_1.default("coffee", 10));
        this.ingredients.set("milk", new Ingredients_1.default("milk", 10));
        this.ingredients.set("sugar", new Ingredients_1.default("sugar", 10));
        this.ingredients.set("water", new Ingredients_1.default("water", 10));
    }
    initializeCoffeeMenu() {
        const espressoIngredients = new Map();
        espressoIngredients.set(this.ingredients.get("coffee"), 3);
        espressoIngredients.set(this.ingredients.get("water"), 2);
        this.coffeeMenu.push(new Coffee_1.default("Espresso", espressoIngredients, 50));
        const americanoIngredients = new Map();
        americanoIngredients.set(this.ingredients.get("coffee"), 3);
        americanoIngredients.set(this.ingredients.get("water"), 3);
        this.coffeeMenu.push(new Coffee_1.default("Americano", americanoIngredients, 60));
        const latteIngredients = new Map();
        latteIngredients.set(this.ingredients.get("coffee"), 3);
        latteIngredients.set(this.ingredients.get("milk"), 2);
        latteIngredients.set(this.ingredients.get("water"), 2);
        latteIngredients.set(this.ingredients.get("sugar"), 1);
        this.coffeeMenu.push(new Coffee_1.default("Latte", latteIngredients, 70));
        const cappuccinoIngredients = new Map();
        cappuccinoIngredients.set(this.ingredients.get("coffee"), 3);
        cappuccinoIngredients.set(this.ingredients.get("milk"), 2);
        cappuccinoIngredients.set(this.ingredients.get("water"), 2);
        cappuccinoIngredients.set(this.ingredients.get("sugar"), 1);
        this.coffeeMenu.push(new Coffee_1.default("Cappuccino", cappuccinoIngredients, 80));
    }
    displayMenu() {
        console.log("\u001B[96m" /* Color.fgBrightCyan */ + "Menu" + "\u001B[0m" /* Color.reset */);
        this.coffeeMenu.forEach((coffee) => {
            console.log("\u001B[95m" /* Color.fgBrightMagenta */ + coffee.getName() + "\u001B[94m" /* Color.fgBrightBlue */ + " - " + coffee.getPrice() + "\u001B[0m" /* Color.reset */);
        });
    }
    // Should be sync in Java
    selectCoffee(coffeeName) {
        const selectedCoffee = this.coffeeMenu.find((coffee) => coffee.getName() === coffeeName);
        if (selectedCoffee) {
            console.log("\u001B[92m" /* Color.fgBrightGreen */ + "Producing " + selectedCoffee.getName() + "\u001B[0m" /* Color.reset */);
            return selectedCoffee;
        }
        return null;
    }
    // Should be sync in Java
    dispenseCoffee(coffee, payment) {
        if (coffee.getPrice() > payment.getAmount()) {
            console.log("\u001B[91m" /* Color.fgBrightRed */ + "Insufficient payment" + "\u001B[0m" /* Color.reset */);
            return;
        }
        if (!this.hasEnoughIngredients(coffee)) {
            console.log("\u001B[91m" /* Color.fgBrightRed */ + "Insufficient ingredients" + "\u001B[0m" /* Color.reset */);
            return;
        }
        this.updateIngredients(coffee);
        console.log("\u001B[92m" /* Color.fgBrightGreen */ + "Dispensing " + coffee.getName() + "\u001B[0m" /* Color.reset */);
        const change = payment.getAmount() - coffee.getPrice();
        if (change > 0) {
            console.log("\u001B[92m" /* Color.fgBrightGreen */ + "Returning change " + change + "\u001B[0m" /* Color.reset */);
        }
        else {
            console.log("\u001B[92m" /* Color.fgBrightGreen */ + "No change" + "\u001B[0m" /* Color.reset */);
        }
        this.printIngredientQuantity();
        console.log();
    }
    hasEnoughIngredients(coffee) {
        var _a, _b;
        const recipe = coffee.getRecipe();
        for (const [ingredient, quantity] of recipe) {
            if (((_b = (_a = this.ingredients.get(ingredient.getName())) === null || _a === void 0 ? void 0 : _a.getQuantity()) !== null && _b !== void 0 ? _b : 0) < quantity) {
                console.log("\u001B[91m" /* Color.fgBrightRed */ + "Insufficient " + ingredient.getName() + "\u001B[0m" /* Color.reset */);
                return false;
            }
        }
        return true;
    }
    updateIngredients(coffee) {
        var _a;
        const recipe = coffee.getRecipe();
        for (const [ingredient, quantity] of recipe) {
            (_a = this.ingredients.get(ingredient.getName())) === null || _a === void 0 ? void 0 : _a.updateQuantity(-quantity);
        }
    }
    printIngredientQuantity() {
        console.log("\u001B[96m" /* Color.fgBrightCyan */ + "Ingredients" + "\u001B[0m" /* Color.reset */);
        this.ingredients.forEach((ingredient) => {
            console.log("\u001B[95m" /* Color.fgBrightMagenta */ + "    " + ingredient.getName() + "\u001B[94m" /* Color.fgBrightBlue */ + " - " + ingredient.getQuantity() + "\u001B[0m" /* Color.reset */);
        });
    }
}
exports.default = CoffeeMachine;
