import PaymentFlow from "./PaymentFlow";

class PayToMerchant extends PaymentFlow {
  
  validateRequest(): void {
    console.log("Validating request for merchant payment");
  }

  calculateFees(): void {
    console.log("Calculating fees for merchant payment");
  }

  debitAmount(): void {
    console.log("Debiting amount for merchant payment");
  }

  creditAmount(): void {
    console.log("Crediting amount for merchant payment");
  }
}

export default PayToMerchant;