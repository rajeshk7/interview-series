"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DispenseState_1 = require("./DispenseState");
var IdleState_1 = require("./IdleState");
var SelectionState = /** @class */ (function () {
    function SelectionState() {
        console.log("Vending machine is in selection state");
    }
    SelectionState.prototype.clickInsertCoinButton = function (machine) {
        throw new Error("Invalid operation");
    };
    SelectionState.prototype.clickProductSelectionButton = function (machine) {
        console.log("Please select product");
    };
    SelectionState.prototype.insertCoin = function (machine, coin) {
        throw new Error("Invalid operation");
    };
    SelectionState.prototype.chooseProduct = function (machine, productCode) {
        var item = machine.getInventory().getItem(productCode);
        var totalMoneyPaid = 0;
        machine.getCoins().forEach(function (coin) {
            totalMoneyPaid += coin;
        });
        console.log("Total money paid: " + totalMoneyPaid);
        console.log("Item price: " + item.getPrice());
        if (totalMoneyPaid < item.getPrice()) {
            console.log("Insufficient funds");
            this.refundCoins(machine);
            return;
        }
        if (totalMoneyPaid > item.getPrice()) {
            console.log("Returning change");
            this.getChange(totalMoneyPaid - item.getPrice());
        }
        machine.changeState(new DispenseState_1.default(machine, productCode));
    };
    SelectionState.prototype.dispenseProduct = function (machine, productCode) {
        throw new Error("Invalid operation");
    };
    SelectionState.prototype.getChange = function (change) {
        console.log("Returning change to user " + change);
        return null;
    };
    SelectionState.prototype.refundCoins = function (machine) {
        console.log("Refunding coins");
        machine.changeState(new IdleState_1.default(machine));
        return machine.getCoins();
    };
    SelectionState.prototype.updateInventory = function (machine, item, productCode) {
        throw new Error("Invalid operation");
    };
    return SelectionState;
}());
exports.default = SelectionState;
