import Coffee from "./Coffee";
import CoffeeMachine from "./CoffeeMachine";
import Payment from "./Payment";

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