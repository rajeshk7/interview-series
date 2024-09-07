import VendingOperations from "../../Schema/VendingOperations";
import SelectionState from "./SelectionState";

class HasMoneyState implements VendingOperations {

    constructor() {
        console.log("Vending machine is in has money state");
    }

    clickInsertCoinButton(machine) {
        console.log("Please insert coin");
    }

    clickProductSelectionButton(machine) {
        machine.changeState(new SelectionState());
    }

    insertCoin(machine, coin) {
        console.log("Coin inserted successfully")
        const coins = machine.getCoins()
        coins.push(coin)
        machine.setCoins(coins)
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
        machine.refundCoins();
        return null
    }

    updateInventory(machine, item, productCode) {
        throw new Error("Invalid operation");
    }
}

export default HasMoneyState;