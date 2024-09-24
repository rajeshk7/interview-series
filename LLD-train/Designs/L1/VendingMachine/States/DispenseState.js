"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DispenseState = /** @class */ (function () {
    function DispenseState(vendingMachine) {
        this.vendingMachine = vendingMachine;
    }
    DispenseState.prototype.selectProduct = function (product) {
        console.log("\u001B[93m" /* Color.fgBrightYellow */, 'Product already selected', "\u001B[0m" /* Color.reset */);
    };
    DispenseState.prototype.insertCoin = function (coin) {
        console.log("\u001B[93m" /* Color.fgBrightYellow */, 'Payment already made', "\u001B[0m" /* Color.reset */);
    };
    DispenseState.prototype.dispenseProduct = function () {
        var _a;
        this.vendingMachine.setState(this.vendingMachine.getReadyState());
        var product = this.vendingMachine.getSelectedProduct();
        console.log("\u001B[92m" /* Color.fgBrightGreen */, "Dispensing ".concat(product.getName()), "\u001B[0m" /* Color.reset */);
        var oldQuantity = (_a = this.vendingMachine.inventory.getQuantity(product)) !== null && _a !== void 0 ? _a : 0;
        this.vendingMachine.inventory.updateQuantity(product, oldQuantity - 1);
        console.log("\u001B[32m" /* Color.fgGreen */, 'Remaining quantity ', oldQuantity - 1, "\u001B[0m" /* Color.reset */);
        this.vendingMachine.setState(this.vendingMachine.getReturnChangeState());
    };
    DispenseState.prototype.returnChange = function () {
        console.log("\u001B[92m" /* Color.fgBrightGreen */, 'Please collect the dispensed product first.', "\u001B[0m" /* Color.reset */);
    };
    return DispenseState;
}());
exports.default = DispenseState;
