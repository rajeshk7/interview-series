"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var HasMoneyState_1 = require("./HasMoneyState");
var IdleState = /** @class */ (function () {
    function IdleState(machine) {
        console.log("Vending machine is in idle state");
        machine === null || machine === void 0 ? void 0 : machine.setCoins([]);
    }
    IdleState.prototype.clickInsertCoinButton = function (machine) {
        machine.changeState(new HasMoneyState_1.default());
    };
    IdleState.prototype.clickProductSelectionButton = function (machine) {
        throw new Error("Invalid operation");
    };
    IdleState.prototype.insertCoin = function (machine, coin) {
        throw new Error("Invalid operation");
    };
    IdleState.prototype.chooseProduct = function (machine, productCode) {
        throw new Error("Invalid operation");
    };
    IdleState.prototype.dispenseProduct = function (machine, productCode) {
        throw new Error("Invalid operation");
    };
    IdleState.prototype.getChange = function (machine) {
        throw new Error("Invalid operation");
        return null;
    };
    IdleState.prototype.refundCoins = function (machine) {
        throw new Error("Invalid operation");
        return null;
    };
    IdleState.prototype.updateInventory = function (machine, item, productCode) {
        throw new Error("Invalid operation");
    };
    return IdleState;
}());
exports.default = IdleState;
