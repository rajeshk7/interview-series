import Inventory from "./Inventory";
import IdleState from "./States/IdleState";
import ReadyState from "./States/ReadyState";
import DispenseState from "./States/DispenseState";
import VendingMachineState from "./VendingMachineState";
import ReturnChangeState from "./States/ReturnChangeState";
import Product from "./Product";
import Coin from "./Coin";

class VendingMachine {
    private static instance: VendingMachine;
    inventory: Inventory;

    private idleState: VendingMachineState;
    private readyState: VendingMachineState;
    private returnChangeState: VendingMachineState;
    private dispenseState: VendingMachineState;

    private currentState: VendingMachineState;

    private selectedProduct: Product | null;
    private totalPayment: number;

    constructor() {
        this.inventory = new Inventory();
        this.idleState = new IdleState(this);
        this.readyState = new ReadyState(this);
        this.returnChangeState = new ReturnChangeState(this);
        this.dispenseState = new DispenseState(this);
        this.currentState = this.idleState;
        this.selectedProduct = null;
        this.totalPayment = 0;
    }

    static getInstance() {
        if (!VendingMachine.instance) {
            VendingMachine.instance = new VendingMachine();
        }
        return VendingMachine.instance;
    }

    selectProduct(product: Product) {
        this.currentState.selectProduct(product);
    }

    insertCoin(coin: Coin) {
        this.currentState.insertCoin(coin);
    }

    dispenseProduct() {
        this.currentState.dispenseProduct();
    }

    returnChange() {
        this.currentState.returnChange();
    }

    setState(state: VendingMachineState) {
        this.currentState = state;
    }

    getIdleState() {
        return this.idleState;
    }

    getReadyState() {
        return this.readyState;
    }

    getReturnChangeState() {
        return this.returnChangeState;
    }

    getDispenseState() {
        return this.dispenseState;
    }

    getSelectedProduct() {
        return this.selectedProduct;
    }

    setSelectedProduct(product: Product) {
        this.selectedProduct = product;
    }

    resetSelectedProduct() {
        this.selectedProduct = null;
    }

    getTotalPayment() {
        return this.totalPayment;
    }

    addCoin(coin: Coin) {
        this.totalPayment += coin.getValue() as number;
        console.log('Total payment:', this.totalPayment);
    }

    resetPayment() {
        this.totalPayment = 0;
    }
}

export default VendingMachine;