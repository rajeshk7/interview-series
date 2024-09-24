class Payment   {
    private amount: number;

    constructor(amount: number) {
        this.amount = amount;
    }

    getAmount(): number {
        return this.amount;
    }
}

export default Payment;