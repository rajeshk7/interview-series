import VendingOperations from "../../Schema/VendingOperations";
import IdleState from "./IdleState";
import VendingMachine from "../VendingMachine";

class DispenseState implements VendingOperations {

    constructor(machine: VendingMachine, productCode: number) {
        console.log("Vending machine is in dispense state");
        this.dispenseProduct(machine, productCode)
    }

    clickInsertCoinButton(machine) {
        throw new Error("Invalid operation");
    }

    clickProductSelectionButton(machine) {
        throw new Error("Invalid operation");
    }

    insertCoin(machine, coin) {
        throw new Error("Invalid operation");
    }

    chooseProduct(machine, productCode) {
        throw new Error("Invalid operation");
    }

    dispenseProduct(machine: VendingMachine, productCode: number) {
        const inventory = machine.getInventory();
        const item = inventory.getItem(productCode);
        inventory.updateSoldOutItem(productCode);
        console.log("Dispensing product... " + item?.getName());
        machine.setState(new IdleState(machine));
        return item
    }

    getChange(machine) {
        throw new Error("Invalid operation");
        return null;
    }

    refundCoins(machine) {
        throw new Error("Invalid operation");
        return null;
    }

    updateInventory(machine, item, productCode) {
        throw new Error("Invalid operation");
    }
}

export default DispenseState;