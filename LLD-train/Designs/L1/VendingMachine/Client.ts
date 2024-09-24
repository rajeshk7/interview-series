import VendingMachine from "./VendingMachine";
import Product from "./Product";
import Coin from "./Coin";
import CoinType from "./CoinType";

const vendingMachine = VendingMachine.getInstance();

const coke = new Product('Coke', 25);
const pepsi = new Product('Pepsi', 30);
const maaza = new Product('Maaza', 35);
const water = new Product('Water', 20);

vendingMachine.inventory.addProduct(coke, 10);
vendingMachine.inventory.addProduct(pepsi, 10);
vendingMachine.inventory.addProduct(maaza, 10);
vendingMachine.inventory.addProduct(water, 10);

console.log('\n ------------- Selecting product Coke\n');
vendingMachine.selectProduct(coke);

vendingMachine.insertCoin(new Coin(CoinType.DIME));
vendingMachine.insertCoin(new Coin(CoinType.QUARTER));

vendingMachine.dispenseProduct();

vendingMachine.returnChange();

console.log('\n ------------- Selecting product Pepsi\n');
vendingMachine.selectProduct(pepsi);

vendingMachine.insertCoin(new Coin(CoinType.QUARTER));
vendingMachine.insertCoin(new Coin(CoinType.QUARTER));

vendingMachine.dispenseProduct();

vendingMachine.returnChange();

