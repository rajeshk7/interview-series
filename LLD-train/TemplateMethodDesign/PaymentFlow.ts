abstract class PaymentFlow {
    abstract validateRequest(): void;
    abstract calculateFees(): void;
    abstract debitAmount(): void;
    abstract creditAmount(): void;

    sendMoney(): void {
        this.validateRequest();
        this.calculateFees();
        this.debitAmount();
        this.creditAmount();
    }

}

export default PaymentFlow;