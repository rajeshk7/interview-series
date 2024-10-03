import PaymentProcessor from "./PaymentProcessor";

class CreditCardPaymentProcessor implements PaymentProcessor {
    PaymentProcessor(amount: number): boolean {
        console.log(`Processing payment of ${amount} using Credit Card`);
        return true;
    }
}

export default CreditCardPaymentProcessor;