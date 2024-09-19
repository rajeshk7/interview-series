import VendingMachine from './Model/VendingMachine';
import Item from './Model/Item';
import ItemType from './Schema/ItemType';
import VendingOperations from './Schema/VendingOperations';
import Coin from './Schema/Coin';
import ConsoleColors from '../ConsoleColors';

const vendingMachine = new VendingMachine();

const fillUpInventory = () => {
    let shelf = vendingMachine.getInventory().getInventory();

    for( let i = 0; i < shelf.length; i++) {
        let item : Item;
        if(i < 3)   
            item = new Item(ItemType.COKE, 40);
        else if(i < 6) 
            item = new Item(ItemType.PEPSI, 50);
        else if(i < 9) 
            item = new Item(ItemType.JUICE, 75);
        else 
            item = new Item(ItemType.WATER, 100);
    
        shelf[i].setItem(item);
        shelf[i].setIsSoldOut(false);
    }
}

const displayItems = () => {
    let shelf = vendingMachine.getInventory().getInventory();
    for(let i = 0; i < shelf.length; i++) {
        let item = shelf[i].getItem();
        console.log(`${ConsoleColors.fgGreen}Product Code: ${shelf[i].getCode()} ${ConsoleColors.fgYellow}Item: ${item.getType()} ${ConsoleColors.fgCyan}Price: ${item.getPrice()}${ConsoleColors.reset}`);
    }
}

console.log(`${ConsoleColors.fgRed}Filling inventory with items`);

fillUpInventory();
displayItems();

console.log(`${ConsoleColors.fgBlue}Clicking on insert coin buttom`);

let vendingOperation: VendingOperations = vendingMachine.getOperations();
vendingOperation.clickInsertCoinButton(vendingMachine);

vendingOperation = vendingMachine.getOperations();

vendingOperation.insertCoin(vendingMachine, Coin.FIVE);
vendingOperation.insertCoin(vendingMachine, Coin.TEN);
vendingOperation.insertCoin(vendingMachine, Coin.TWENTY);
vendingOperation.insertCoin(vendingMachine, Coin.FIFTY);

console.log(`${ConsoleColors.fgMagenta}Clicking on product selection button`);

vendingOperation.clickProductSelectionButton(vendingMachine);
vendingOperation = vendingMachine.getOperations();
vendingOperation.chooseProduct(vendingMachine, 104);

displayItems();
