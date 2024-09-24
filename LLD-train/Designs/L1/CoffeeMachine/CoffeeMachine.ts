import Coffee from "./Coffee";
import Ingredients from "./Ingredients";
import Color from "../../../ConsoleColors";
import Payment from "./Payment";

class CoffeeMachine {
    private static instance: CoffeeMachine;
    ingredients: Map<string, Ingredients>;
    coffeeMenu: Coffee[];

    constructor() {
        this.ingredients = new Map();
        this.coffeeMenu = [];

        // Initialize coffee menu and ingredients
        this.initializeIngredients();
        this.initializeCoffeeMenu();
    }

    static getInstance() {
        if(!CoffeeMachine.instance) {
            CoffeeMachine.instance = new CoffeeMachine();
        }
        return CoffeeMachine.instance;
    }

    initializeIngredients() {
        this.ingredients.set("coffee", new Ingredients("coffee", 10));
        this.ingredients.set("milk", new Ingredients("milk", 10));
        this.ingredients.set("sugar", new Ingredients("sugar", 10));
        this.ingredients.set("water", new Ingredients("water", 10));
    }

    initializeCoffeeMenu()  {
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
        console.log(Color.fgBrightCyan + "Menu" + Color.reset);
        this.coffeeMenu.forEach((coffee) => {
            console.log(Color.fgBrightMagenta + coffee.getName() + Color.fgBrightBlue + " - " + coffee.getPrice() + Color.reset);
        });
    }

    // Should be sync in Java
    selectCoffee(coffeeName: string) {
        const selectedCoffee = this.coffeeMenu.find((coffee) => coffee.getName() === coffeeName);
        if(selectedCoffee) {
            console.log(Color.fgBrightGreen + "Producing " + selectedCoffee.getName() + Color.reset);
            return selectedCoffee;
        }
        return null;
    }

    // Should be sync in Java
    dispenseCoffee(coffee: Coffee, payment: Payment) {
        if(coffee.getPrice() > payment.getAmount()) {
            console.log(Color.fgBrightRed + "Insufficient payment" + Color.reset);
            return;
        }
        if(!this.hasEnoughIngredients(coffee)) {
            console.log(Color.fgBrightRed + "Insufficient ingredients" + Color.reset);
            return;
        }
        this.updateIngredients(coffee);
        console.log(Color.fgBrightGreen + "Dispensing " + coffee.getName() + Color.reset);
        const change = payment.getAmount() - coffee.getPrice();
        if(change > 0) {
            console.log(Color.fgBrightGreen + "Returning change " + change + Color.reset);
        }
        else    {
            console.log(Color.fgBrightGreen + "No change" + Color.reset);   
        }
        this.printIngredientQuantity();
        console.log();
    }

    hasEnoughIngredients(coffee: Coffee) {
        const recipe = coffee.getRecipe();
        for(const [ingredient, quantity] of recipe) {
            if((this.ingredients.get(ingredient.getName())?.getQuantity() ?? 0) < quantity) {
                console.log(Color.fgBrightRed + "Insufficient " + ingredient.getName() + Color.reset);
                return false;
            }
        }
        return true;
    }

    updateIngredients(coffee: Coffee) {
        const recipe = coffee.getRecipe();
        for(const [ingredient, quantity] of recipe) {
            this.ingredients.get(ingredient.getName())?.updateQuantity(-quantity);
        }
    }

    printIngredientQuantity() {
        console.log(Color.fgBrightCyan + "Ingredients" + Color.reset);
        this.ingredients.forEach((ingredient) => {
            console.log(Color.fgBrightMagenta + "    "  + ingredient.getName() + Color.fgBrightBlue + " - " + ingredient.getQuantity() + Color.reset);
        });
    }
}

export default CoffeeMachine;