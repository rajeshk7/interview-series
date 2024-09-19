"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var VendingMachine_1 = require("./Model/VendingMachine");
var Item_1 = require("./Model/Item");
var vendingMachine = new VendingMachine_1.default();
var fillUpInventory = function () {
    var shelf = vendingMachine.getInventory().getInventory();
    for (var i = 0; i < shelf.length; i++) {
        var item = void 0;
        if (i < 3)
            item = new Item_1.default(0 /* ItemType.COKE */, 40);
        else if (i < 6)
            item = new Item_1.default(1 /* ItemType.PEPSI */, 50);
        else if (i < 9)
            item = new Item_1.default(2 /* ItemType.JUICE */, 75);
        else
            item = new Item_1.default(3 /* ItemType.WATER */, 100);
        shelf[i].setItem(item);
        shelf[i].setIsSoldOut(false);
    }
};
var displayItems = function () {
    var shelf = vendingMachine.getInventory().getInventory();
    for (var i = 0; i < shelf.length; i++) {
        var item = shelf[i].getItem();
        console.log("".concat("\u001B[32m" /* ConsoleColors.fgGreen */, "Product Code: ").concat(shelf[i].getCode(), " ").concat("\u001B[33m" /* ConsoleColors.fgYellow */, "Item: ").concat(item.getType(), " ").concat("\u001B[36m" /* ConsoleColors.fgCyan */, "Price: ").concat(item.getPrice()).concat("\u001B[0m" /* ConsoleColors.reset */));
    }
};
console.log("".concat("\u001B[31m" /* ConsoleColors.fgRed */, "Filling inventory with items"));
fillUpInventory();
displayItems();
console.log("".concat("\u001B[34m" /* ConsoleColors.fgBlue */, "Clicking on insert coin buttom"));
var vendingOperation = vendingMachine.getOperations();
vendingOperation.clickInsertCoinButton(vendingMachine);
vendingOperation = vendingMachine.getOperations();
vendingOperation.insertCoin(vendingMachine, 5 /* Coin.FIVE */);
vendingOperation.insertCoin(vendingMachine, 10 /* Coin.TEN */);
vendingOperation.insertCoin(vendingMachine, 20 /* Coin.TWENTY */);
vendingOperation.insertCoin(vendingMachine, 50 /* Coin.FIFTY */);
console.log("".concat("\u001B[35m" /* ConsoleColors.fgMagenta */, "Clicking on product selection button"));
vendingOperation.clickProductSelectionButton(vendingMachine);
vendingOperation = vendingMachine.getOperations();
vendingOperation.chooseProduct(vendingMachine, 104);
displayItems();
