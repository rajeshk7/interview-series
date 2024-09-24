"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ReadyState = /** @class */ (function () {
    function ReadyState(vendingMachine) {
        this.vendingMachine = vendingMachine;
    }
    ReadyState.prototype.selectProduct = function (product) {
        console.log("\u001B[93m" /* Color.fgBrightYellow */, 'Product already selected', "\u001B[0m" /* Color.reset */);
    };
    ReadyState.prototype.insertCoin = function (coin) {
        this.vendingMachine.addCoin(coin);
        console.log("\u001B[32m" /* Color.fgGreen */, 'Coin inserted', "\u001B[0m" /* Color.reset */);
        this.checkPaymentStatus();
    };
    ReadyState.prototype.dispenseProduct = function () {
        console.log("\u001B[92m" /* Color.fgBrightGreen */, 'Insufficient payment.', "\u001B[0m" /* Color.reset */);
    };
    ReadyState.prototype.returnChange = function () {
        console.log("\u001B[93m" /* Color.fgBrightYellow */, 'Please make payment first.', "\u001B[0m" /* Color.reset */);
    };
    ReadyState.prototype.checkPaymentStatus = function () {
        var _a;
        if (this.vendingMachine.getTotalPayment() >= ((_a = this.vendingMachine.getSelectedProduct()) === null || _a === void 0 ? void 0 : _a.getPrice())) {
            this.vendingMachine.setState(this.vendingMachine.getDispenseState());
            console.log("\u001B[32m" /* Color.fgGreen */, 'Payment complete', "\u001B[0m" /* Color.reset */);
        }
    };
    return ReadyState;
}());
exports.default = ReadyState;
