"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CreditCardPaymentProcessor {
    PaymentProcessor(amount) {
        console.log(`Processing payment of ${amount} using Credit Card`);
        return true;
    }
}
exports.default = CreditCardPaymentProcessor;
