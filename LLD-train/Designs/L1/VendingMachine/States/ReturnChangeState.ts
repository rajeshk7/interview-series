import Coin from "../Coin";
import Product from "../Product";
import Color from '../../../../ConsoleColors'
import VendingMachine from "../VendingMachine";
import VendingMachineState from "../VendingMachineState";

class ReturnChangeState implements VendingMachineState {
    private vendingMachine: VendingMachine;

    constructor(vendingMachine: VendingMachine) {
        this.vendingMachine = vendingMachine;
    }

    selectProduct(product: Product): void {
        console.log(Color.fgBrightYellow, 'Product already selected', Color.reset);
    }

    insertCoin(coin: Coin): void {
        console.log(Color.fgBrightYellow, 'Payment already made', Color.reset);
    }

    dispenseProduct(): void {
        console.log(Color.fgBrightYellow, 'Please collect the change first.', Color.reset);
    }

    returnChange(): void {
        const change = this.vendingMachine.getTotalPayment() - (this.vendingMachine.getSelectedProduct() as Product)?.getPrice();
        console.log(Color.fgBrightGreen, `Returning change ${change}`, Color.reset);
        this.vendingMachine.resetPayment();
        this.vendingMachine.resetSelectedProduct();
        this.vendingMachine.setState(this.vendingMachine.getIdleState());
    }
}

export default ReturnChangeState;