"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var IdleState = /** @class */ (function () {
    function IdleState(vendingMachine) {
        this.vendingMachine = vendingMachine;
    }
    IdleState.prototype.selectProduct = function (product) {
        if (this.vendingMachine.inventory.isAvailable(product)) {
            this.vendingMachine.setSelectedProduct(product);
            this.vendingMachine.setState(this.vendingMachine.getReadyState());
            console.log("\u001B[32m" /* Color.fgGreen */, 'Product selected', "\u001B[0m" /* Color.reset */);
        }
        else {
            console.log("\u001B[91m" /* Color.fgBrightRed */, 'Product not available', "\u001B[0m" /* Color.reset */);
        }
    };
    IdleState.prototype.insertCoin = function (coin) {
        console.log("\u001B[95m" /* Color.fgBrightMagenta */, 'No product selected', "\u001B[0m" /* Color.reset */);
    };
    IdleState.prototype.dispenseProduct = function () {
        console.log("\u001B[93m" /* Color.fgBrightYellow */, 'No product selected', "\u001B[0m" /* Color.reset */);
    };
    IdleState.prototype.returnChange = function () {
        console.log("\u001B[32m" /* Color.fgGreen */, 'No change to return', "\u001B[0m" /* Color.reset */);
    };
    return IdleState;
}());
exports.default = IdleState;
