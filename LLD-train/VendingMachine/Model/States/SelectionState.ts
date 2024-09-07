import VendingOperations from "../../Schema/VendingOperations";
import Item from "../Item"
import VendingMachine from "../VendingMachine";
import DispenseState from "./DispenseState";
import IdleState from "./IdleState";

class SelectionState implements VendingOperations {

    constructor() {
        console.log("Vending machine is in selection state");
    }

    clickInsertCoinButton(machine) {
        throw new Error("Invalid operation");
    }

    clickProductSelectionButton(machine) {
        console.log("Please select product");
    }

    insertCoin(machine, coin) {
        throw new Error("Invalid operation");
    }

    chooseProduct(machine: VendingMachine, productCode) {
        let item: Item = machine.getInventory().getItem(productCode) as Item

        let totalMoneyPaid = 0
        machine.getCoins().forEach(coin => {
            totalMoneyPaid += coin
        })
        console.log("Total money paid: " + totalMoneyPaid)
        console.log("Item price: " + item.getPrice())

        if (totalMoneyPaid < item.getPrice()) {
            console.log("Insufficient funds")
            this.refundCoins(machine)
            return
        }
        if(totalMoneyPaid > item.getPrice()) {
            console.log("Returning change")
            this.getChange(totalMoneyPaid - item.getPrice())
        }
        machine.changeState(new DispenseState(machine, productCode))
    }

    dispenseProduct(machine, productCode) {
        throw new Error("Invalid operation");
    }

    getChange(change : number) {
        console.log("Returning change to user " + change)
        return null
    }

    refundCoins(machine) {
        console.log("Refunding coins")
        machine.changeState(new IdleState(machine))
        return machine.getCoins()
    }

    updateInventory(machine, item, productCode) {
        throw new Error("Invalid operation");
    }
}

export default SelectionState;