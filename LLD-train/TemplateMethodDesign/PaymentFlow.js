"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PaymentFlow = /** @class */ (function () {
    function PaymentFlow() {
    }
    PaymentFlow.prototype.sendMoney = function () {
        this.validateRequest();
        this.calculateFees();
        this.debitAmount();
        this.creditAmount();
    };
    return PaymentFlow;
}());
exports.default = PaymentFlow;
