"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Inventory_1 = require("../Inventory");
var IdleState_1 = require("./States/IdleState");
var VendingMachine = /** @class */ (function () {
    function VendingMachine() {
        this.state = new IdleState_1.default();
        this.inventory = new Inventory_1.default(10);
        this.coins = [];
    }
    VendingMachine.prototype.getOperations = function () {
        return this.state;
    };
    VendingMachine.prototype.getInventory = function () {
        return this.inventory;
    };
    VendingMachine.prototype.getCoins = function () {
        return this.coins;
    };
    VendingMachine.prototype.setCoins = function (coins) {
        this.coins = coins;
    };
    VendingMachine.prototype.setState = function (state) {
        this.state = state;
    };
    VendingMachine.prototype.changeState = function (state) {
        this.state = state;
    };
    return VendingMachine;
}());
exports.default = VendingMachine;
