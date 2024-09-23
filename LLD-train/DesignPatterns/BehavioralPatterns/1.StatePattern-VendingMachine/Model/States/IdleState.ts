import VendingOperations from "../../Schema/VendingOperations";
import VendingMachine from "../VendingMachine";
import HasMoneyState from "./HasMoneyState";

class IdleState implements VendingOperations {
    constructor(machine?: VendingMachine) {
        console.log("Vending machine is in idle state");
        machine?.setCoins([]);
    }

    clickInsertCoinButton(machine : VendingMachine) {
        machine.changeState(new HasMoneyState());
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

    dispenseProduct(machine, productCode) {
        throw new Error("Invalid operation");
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

export default IdleState;