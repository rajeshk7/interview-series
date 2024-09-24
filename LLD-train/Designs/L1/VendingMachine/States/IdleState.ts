import Coin from "../Coin";
import Product from "../Product";
import Color from '../../../../ConsoleColors'
import VendingMachine from "../VendingMachine";
import VendingMachineState from "../VendingMachineState";

class IdleState implements VendingMachineState {
    private vendingMachine: VendingMachine;

    constructor(vendingMachine: VendingMachine) {
        this.vendingMachine = vendingMachine;
    }

    selectProduct(product: Product): void {
        if(this.vendingMachine.inventory.isAvailable(product))  {
            this.vendingMachine.setSelectedProduct(product);
            this.vendingMachine.setState(this.vendingMachine.getReadyState());
            console.log(Color.fgGreen, 'Product selected', Color.reset);
        }
        else{
            console.log(Color.fgBrightRed, 'Product not available', Color.reset);
        }
    }

    insertCoin(coin: Coin): void {
        console.log(Color.fgBrightMagenta, 'No product selected', Color.reset);
    }
    dispenseProduct(): void {
        console.log(Color.fgBrightYellow, 'No product selected', Color.reset);
    }

    returnChange(): void {
        console.log(Color.fgGreen, 'No change to return', Color.reset);
    }
}

export default IdleState;