import VendingMachine from "../Model/VendingMachine";
import Coin from "./Coin";
import Item from "../Model/Item";

abstract class VendingOperations {
    abstract clickInsertCoinButton(machine: VendingMachine): void;
    abstract clickProductSelectionButton(machine: VendingMachine): void;
    abstract insertCoin(machine: VendingMachine, coin: Coin): void;
    abstract chooseProduct(machine: VendingMachine, productCode: number): void;
    abstract dispenseProduct(machine: VendingMachine, productCode: number): void;
    abstract getChange(change: number): number | null;
    abstract refundCoins(machine: VendingMachine): Coin[] | null;
    abstract updateInventory(machine: VendingMachine, item: Item, productCode: number): void;
}

export default VendingOperations;