import Coin from "./Coin";
import Product from "./Product";

interface VendingMachineState {
    selectProduct(product: Product): void;
    insertCoin(coin: Coin): void;
    dispenseProduct(): void;
    returnChange(): void;
}

export default VendingMachineState;