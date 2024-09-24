import Inventory from "../Inventory";
import Coin from "../Schema/Coin";
import IdleState from "./States/IdleState";

class VendingMachine  {
    state = new IdleState()
    inventory: Inventory = new Inventory(10)
    coins: Coin[] = []

    getOperations() : IdleState {
        return this.state;
    }

    getInventory(): Inventory {
        return this.inventory;
    }

    getCoins(): Coin[] {
        return this.coins;
    }

    setCoins(coins: Coin[]) {
        this.coins = coins;
    }

    setState(state) {
        this.state = state;
    }

    changeState(state) {
        this.state = state;
    }
}

export default VendingMachine;
