import PaymentProcessor from "./PaymentProcessor";

class PayPalPaymentProcessor implements PaymentProcessor {
    PaymentProcessor(amount: number): boolean {
        console.log(`Processing payment of ${amount} using PayPal`);
        return true;
    }
}

export default PayPalPaymentProcessor;