"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var IdleState_1 = require("./IdleState");
var DispenseState = /** @class */ (function () {
    function DispenseState(machine, productCode) {
        console.log("Vending machine is in dispense state");
        this.dispenseProduct(machine, productCode);
    }
    DispenseState.prototype.clickInsertCoinButton = function (machine) {
        throw new Error("Invalid operation");
    };
    DispenseState.prototype.clickProductSelectionButton = function (machine) {
        throw new Error("Invalid operation");
    };
    DispenseState.prototype.insertCoin = function (machine, coin) {
        throw new Error("Invalid operation");
    };
    DispenseState.prototype.chooseProduct = function (machine, productCode) {
        throw new Error("Invalid operation");
    };
    DispenseState.prototype.dispenseProduct = function (machine, productCode) {
        var inventory = machine.getInventory();
        var item = inventory.getItem(productCode);
        inventory.updateSoldOutItem(productCode);
        console.log("Dispensing product... " + (item === null || item === void 0 ? void 0 : item.getName()));
        machine.setState(new IdleState_1.default(machine));
        return item;
    };
    DispenseState.prototype.getChange = function (machine) {
        throw new Error("Invalid operation");
        return null;
    };
    DispenseState.prototype.refundCoins = function (machine) {
        throw new Error("Invalid operation");
        return null;
    };
    DispenseState.prototype.updateInventory = function (machine, item, productCode) {
        throw new Error("Invalid operation");
    };
    return DispenseState;
}());
exports.default = DispenseState;
