"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SelectionState_1 = require("./SelectionState");
var HasMoneyState = /** @class */ (function () {
    function HasMoneyState() {
        console.log("Vending machine is in has money state");
    }
    HasMoneyState.prototype.clickInsertCoinButton = function (machine) {
        console.log("Please insert coin");
    };
    HasMoneyState.prototype.clickProductSelectionButton = function (machine) {
        machine.changeState(new SelectionState_1.default());
    };
    HasMoneyState.prototype.insertCoin = function (machine, coin) {
        console.log("Coin inserted successfully");
        var coins = machine.getCoins();
        coins.push(coin);
        machine.setCoins(coins);
    };
    HasMoneyState.prototype.chooseProduct = function (machine, productCode) {
        throw new Error("Invalid operation");
    };
    HasMoneyState.prototype.dispenseProduct = function (machine, productCode) {
        throw new Error("Invalid operation");
    };
    HasMoneyState.prototype.getChange = function (machine) {
        throw new Error("Invalid operation");
        return null;
    };
    HasMoneyState.prototype.refundCoins = function (machine) {
        machine.refundCoins();
        return null;
    };
    HasMoneyState.prototype.updateInventory = function (machine, item, productCode) {
        throw new Error("Invalid operation");
    };
    return HasMoneyState;
}());
exports.default = HasMoneyState;
