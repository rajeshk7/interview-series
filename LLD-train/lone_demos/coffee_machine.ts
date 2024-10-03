import Color from '../ConsoleColors'

class Ingredients{
    name: string
    quantity: number

    constructor(name: string, quantity: number) {
        this.name = name
        this.quantity = quantity
    }

    updateQuantity(delta: number)   {
        this.quantity -= delta
    }
}

class Coffee {
    name: string
    price: number
    ingredients: Map<Ingredients, number>;

    constructor(name: string, ingredients:  Map<Ingredients, number>, price: number)    {
        this.name = name
        this.price = price
        this.ingredients = ingredients
    }
}

class Payment   {
    amount: number;

    constructor(amount: number) {
        this.amount = amount;
    }
}

class CoffeeMachine {
    private static instance: CoffeeMachine;
    ingredients: Map<string, Ingredients>;
    coffeeMenu: Coffee[];    

    constructor()   {
        this.ingredients = new Map()
        this.coffeeMenu = []

        this.initializeIngredients()
        this.initializeCoffeeMenu()
    }

    static getInstance()   {
        if(this.instance == null)
            this.instance = new CoffeeMachine()
        return this.instance
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
            console.log(Color.fgBrightMagenta + coffee.name + Color.fgBrightBlue + " - " + coffee.price + Color.reset);
        });
    }

    printIngredientQuantity() {
        console.log(Color.fgBrightCyan + "Ingredients" + Color.reset);
        this.ingredients.forEach((ingredient) => {
            console.log(Color.fgBrightMagenta + "    "  + ingredient.name + Color.fgBrightBlue + " - " + ingredient.quantity + Color.reset);
        });
    }

    selectCoffee(coffeeName: string) { // Choose coffee
        for( const coffee of this.coffeeMenu )
            if(coffee.name == coffeeName )
                return coffee
        
        return null
    }

    dispenseCoffee(coffee: Coffee, payment: Payment) {
        if(!this.hasEnoughIngredients(coffee))
            return

        if(coffee.price > payment.amount)   {
            console.log("Insufficient funds ")
            return
        }

        this.updateIngredients(coffee)
        console.log("Dispensing coffee " + coffee.name)
        if(coffee.price < payment.amount)   {
            console.log("Returning change " + (payment.amount - coffee.price))
        }
        else
            console.log("No change to return")

        this.printIngredientQuantity()
        console.log("\n")
    }

    hasEnoughIngredients(coffee: Coffee) {
        const ingredientsList = coffee.ingredients
        for(const [ingredient, quantity] of ingredientsList) {
            console.log(ingredient, quantity)
            if((this.ingredients.get(ingredient.name)?.quantity ?? 0) < quantity) {
                console.log(Color.fgBrightRed + "Insufficient " + ingredient.name + Color.reset);
                return false
            }
        }
        return true
    }

    updateIngredients(coffee: Coffee) {
        const ingredientsList = coffee.ingredients
        for(const [ingredient, quantity] of ingredientsList) {
            this.ingredients.get(ingredient.name)?.updateQuantity(quantity)
        }
    }
}

const coffeeMachine = CoffeeMachine.getInstance();

coffeeMachine.displayMenu();

console.log('\n ------------- Selecting product Espresso\n');
const espresso =  coffeeMachine.selectCoffee("Espresso");
coffeeMachine.dispenseCoffee(espresso as Coffee, new Payment(50));

console.log('\n ------------- Selecting product Americano\n');
const americano = coffeeMachine.selectCoffee("Americano");
coffeeMachine.dispenseCoffee(americano as Coffee, new Payment(160));

console.log('\n ------------- Selecting product Latte\n');
const latte = coffeeMachine.selectCoffee("Latte");
coffeeMachine.dispenseCoffee(latte as Coffee, new Payment(70));

console.log('\n ------------- Selecting product Cappuccino\n');
const cappuccino = coffeeMachine.selectCoffee("Cappuccino");
coffeeMachine.dispenseCoffee(cappuccino as Coffee, new Payment(180));