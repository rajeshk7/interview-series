import PaymentFlow from "./PaymentFlow";

class PayToFriend extends PaymentFlow {
    validateRequest(): void {
        console.log("Validating request for friend payment");
    }

    calculateFees(): void {
        console.log("Calculating fees for friend payment");
    }

    debitAmount(): void {
        console.log("Debiting amount for friend payment");
    }

    creditAmount(): void {
        console.log("Crediting amount for friend payment");
    }
}

export default PayToFriend;