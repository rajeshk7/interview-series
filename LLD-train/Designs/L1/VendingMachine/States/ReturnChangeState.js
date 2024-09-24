"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ReturnChangeState = /** @class */ (function () {
    function ReturnChangeState(vendingMachine) {
        this.vendingMachine = vendingMachine;
    }
    ReturnChangeState.prototype.selectProduct = function (product) {
        console.log("\u001B[93m" /* Color.fgBrightYellow */, 'Product already selected', "\u001B[0m" /* Color.reset */);
    };
    ReturnChangeState.prototype.insertCoin = function (coin) {
        console.log("\u001B[93m" /* Color.fgBrightYellow */, 'Payment already made', "\u001B[0m" /* Color.reset */);
    };
    ReturnChangeState.prototype.dispenseProduct = function () {
        console.log("\u001B[93m" /* Color.fgBrightYellow */, 'Please collect the change first.', "\u001B[0m" /* Color.reset */);
    };
    ReturnChangeState.prototype.returnChange = function () {
        var _a;
        var change = this.vendingMachine.getTotalPayment() - ((_a = this.vendingMachine.getSelectedProduct()) === null || _a === void 0 ? void 0 : _a.getPrice());
        console.log("\u001B[92m" /* Color.fgBrightGreen */, "Returning change ".concat(change), "\u001B[0m" /* Color.reset */);
        this.vendingMachine.resetPayment();
        this.vendingMachine.resetSelectedProduct();
        this.vendingMachine.setState(this.vendingMachine.getIdleState());
    };
    return ReturnChangeState;
}());
exports.default = ReturnChangeState;
