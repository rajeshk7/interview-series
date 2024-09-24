import Coin from "../Coin";
import Product from "../Product";
import Color from '../../../../ConsoleColors'
import VendingMachine from "../VendingMachine";
import VendingMachineState from "../VendingMachineState";

class DispenseState implements VendingMachineState {
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
        this.vendingMachine.setState(this.vendingMachine.getReadyState())

        const product = this.vendingMachine.getSelectedProduct() as Product;
        console.log(Color.fgBrightGreen, `Dispensing ${product.getName()}`, Color.reset);
        const oldQuantity = this.vendingMachine.inventory.getQuantity(product) ?? 0;
        this.vendingMachine.inventory.updateQuantity(product, oldQuantity - 1);
        console.log(Color.fgGreen, 'Remaining quantity ' ,oldQuantity-1 , Color.reset);
        this.vendingMachine.setState(this.vendingMachine.getReturnChangeState())
    }

    returnChange(): void {
        console.log(Color.fgBrightGreen, 'Please collect the dispensed product first.', Color.reset);
    }
}

export default DispenseState;