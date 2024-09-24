import Coin from "../Coin";
import Product from "../Product";
import Color from '../../../../ConsoleColors'
import VendingMachine from "../VendingMachine";
import VendingMachineState from "../VendingMachineState";

class ReadyState implements VendingMachineState {
    private vendingMachine: VendingMachine;

    constructor(vendingMachine: VendingMachine) {
        this.vendingMachine = vendingMachine;
    }

    selectProduct(product: Product): void {
        console.log(Color.fgBrightYellow, 'Product already selected', Color.reset);
    }

    insertCoin(coin: Coin): void {
        this.vendingMachine.addCoin(coin);
        console.log(Color.fgGreen, 'Coin inserted', Color.reset);
        this.checkPaymentStatus()
    }

    dispenseProduct(): void {
        console.log(Color.fgBrightGreen, 'Insufficient payment.', Color.reset);
    }

    returnChange(): void {
        console.log(Color.fgBrightYellow, 'Please make payment first.', Color.reset);
    }

    checkPaymentStatus(): void {
        if(this.vendingMachine.getTotalPayment() >= (this.vendingMachine.getSelectedProduct() as Product)?.getPrice()) {
            this.vendingMachine.setState(this.vendingMachine.getDispenseState());
            console.log(Color.fgGreen, 'Payment complete', Color.reset);
        }
    }
}

export default ReadyState;