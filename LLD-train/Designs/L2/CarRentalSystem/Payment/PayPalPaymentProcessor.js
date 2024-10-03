"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PayPalPaymentProcessor {
    PaymentProcessor(amount) {
        console.log(`Processing payment of ${amount} using PayPal`);
        return true;
    }
}
exports.default = PayPalPaymentProcessor;
