"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Ingredients {
    constructor(name, quantity) {
        this.name = name;
        this.quantity = quantity;
    }
    updateQuantity(delta) {
        this.quantity -= delta;
    }
}
class Coffee {
    constructor(name, ingredients, price) {
        this.name = name;
        this.price = price;
        this.ingredients = ingredients;
    }
}
class Payment {
    constructor(amount) {
        this.amount = amount;
    }
}
class CoffeeMachine {
    constructor() {
        this.ingredients = new Map();
        this.coffeeMenu = [];
        this.initializeIngredients();
        this.initializeCoffeeMenu();
    }
    static getInstance() {
        if (this.instance == null)
            this.instance = new CoffeeMachine();
        return this.instance;
    }
    initializeIngredients() {
        this.ingredients.set("coffee", new Ingredients("coffee", 10));
        this.ingredients.set("milk", new Ingredients("milk", 10));
        this.ingredients.set("sugar", new Ingredients("sugar", 10));
        this.ingredients.set("water", new Ingredients("water", 10));
    }
    initializeCoffeeMenu() {
        const espressoIngredients = new Map();
        espressoIngredients.set(this.ingredients.get("coffee"), 3);
        espressoIngredients.set(this.ingredients.get("water"), 2);
        this.coffeeMenu.push(new Coffee("Espresso", espressoIngredients, 50));
        const americanoIngredients = new Map();
        americanoIngredients.set(this.ingredients.get("coffee"), 3);
        americanoIngredients.set(this.ingredients.get("water"), 3);
        this.coffeeMenu.push(new Coffee("Americano", americanoIngredients, 60));
        const latteIngredients = new Map();
        latteIngredients.set(this.ingredients.get("coffee"), 3);
        latteIngredients.set(this.ingredients.get("milk"), 2);
        latteIngredients.set(this.ingredients.get("water"), 2);
        latteIngredients.set(this.ingredients.get("sugar"), 1);
        this.coffeeMenu.push(new Coffee("Latte", latteIngredients, 70));
        const cappuccinoIngredients = new Map();
        cappuccinoIngredients.set(this.ingredients.get("coffee"), 3);
        cappuccinoIngredients.set(this.ingredients.get("milk"), 2);
        cappuccinoIngredients.set(this.ingredients.get("water"), 2);
        cappuccinoIngredients.set(this.ingredients.get("sugar"), 1);
        this.coffeeMenu.push(new Coffee("Cappuccino", cappuccinoIngredients, 80));
    }
    displayMenu() {
        console.log("\u001B[96m" /* Color.fgBrightCyan */ + "Menu" + "\u001B[0m" /* Color.reset */);
        this.coffeeMenu.forEach((coffee) => {
            console.log("\u001B[95m" /* Color.fgBrightMagenta */ + coffee.name + "\u001B[94m" /* Color.fgBrightBlue */ + " - " + coffee.price + "\u001B[0m" /* Color.reset */);
        });
    }
    printIngredientQuantity() {
        console.log("\u001B[96m" /* Color.fgBrightCyan */ + "Ingredients" + "\u001B[0m" /* Color.reset */);
        this.ingredients.forEach((ingredient) => {
            console.log("\u001B[95m" /* Color.fgBrightMagenta */ + "    " + ingredient.name + "\u001B[94m" /* Color.fgBrightBlue */ + " - " + ingredient.quantity + "\u001B[0m" /* Color.reset */);
        });
    }
    selectCoffee(coffeeName) {
        for (const coffee of this.coffeeMenu)
            if (coffee.name == coffeeName)
                return coffee;
        return null;
    }
    dispenseCoffee(coffee, payment) {
        if (!this.hasEnoughIngredients(coffee))
            return;
        if (coffee.price > payment.amount) {
            console.log("Insufficient funds ");
            return;
        }
        this.updateIngredients(coffee);
        console.log("Dispensing coffee " + coffee.name);
        if (coffee.price < payment.amount) {
            console.log("Returning change " + (payment.amount - coffee.price));
        }
        else
            console.log("No change to return");
        this.printIngredientQuantity();
        console.log("\n");
    }
    hasEnoughIngredients(coffee) {
        var _a, _b;
        const ingredientsList = coffee.ingredients;
        for (const [ingredient, quantity] of ingredientsList) {
            console.log(ingredient, quantity);
            if (((_b = (_a = this.ingredients.get(ingredient.name)) === null || _a === void 0 ? void 0 : _a.quantity) !== null && _b !== void 0 ? _b : 0) < quantity) {
                console.log("\u001B[91m" /* Color.fgBrightRed */ + "Insufficient " + ingredient.name + "\u001B[0m" /* Color.reset */);
                return false;
            }
        }
        return true;
    }
    updateIngredients(coffee) {
        var _a;
        const ingredientsList = coffee.ingredients;
        for (const [ingredient, quantity] of ingredientsList) {
            (_a = this.ingredients.get(ingredient.name)) === null || _a === void 0 ? void 0 : _a.updateQuantity(quantity);
        }
    }
}
const coffeeMachine = CoffeeMachine.getInstance();
coffeeMachine.displayMenu();
console.log('\n ------------- Selecting product Espresso\n');
const espresso = coffeeMachine.selectCoffee("Espresso");
coffeeMachine.dispenseCoffee(espresso, new Payment(50));
console.log('\n ------------- Selecting product Americano\n');
const americano = coffeeMachine.selectCoffee("Americano");
coffeeMachine.dispenseCoffee(americano, new Payment(160));
console.log('\n ------------- Selecting product Latte\n');
const latte = coffeeMachine.selectCoffee("Latte");
coffeeMachine.dispenseCoffee(latte, new Payment(70));
console.log('\n ------------- Selecting product Cappuccino\n');
const cappuccino = coffeeMachine.selectCoffee("Cappuccino");
coffeeMachine.dispenseCoffee(cappuccino, new Payment(180));
