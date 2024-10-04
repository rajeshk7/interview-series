enum Coin {
    ONE = 1,
    TWO = 2,
    FIVE = 5,
    TEN = 10
}

class Product {
    name: string
    price: number

    constructor(name: string, price: number)    {
        this.name = name
        this.price = price
    }
}

class Inventory {
    private products: Map<Product, number>;

    constructor() {
        this.products = new Map();
    }

    addProduct(product: Product, quantity: number) {
        this.products.set(product, (this.products.get(product) ?? 0) + quantity);
    }

    removeProduct(product: Product) {
        this.products.delete(product);
    }

    updateQuantity(product: Product, quantity: number) {
        this.products.set(product, quantity);
    }

    getQuantity(product: Product) {
        return this.products.get(product);
    }

    isAvailable(product: Product) {
        return this.products.has(product) && (this.products.get(product) ?? 0) > 0;
    }

}

interface VendingMachineState {
    selectProduct(product: Product): void;
    insertCoin(coin: Coin[]): void;
    dispenseProduct(): void;
    returnChange(): void;
}

class IdleState implements VendingMachineState {
    private vendingMachine: VendingMachine;

    constructor(vendingMachine: VendingMachine) {
        this.vendingMachine = vendingMachine;
    }

    selectProduct(product: Product): void {
        if(this.vendingMachine.inventory.isAvailable(product))  {
            this.vendingMachine.setSelectedProduct(product)
            this.vendingMachine.setState(this.vendingMachine.getReadyState())
            console.log("Alpha product selected and sent to next state ")
        }
    }
    insertCoin(coin: Coin[]): void {

    }
    dispenseProduct(): void {

    }
    returnChange(): void {

    }
}

class GetReadyState implements VendingMachineState {
    private vendingMachine: VendingMachine;

    constructor(vendingMachine: VendingMachine) {
        this.vendingMachine = vendingMachine;
    }

    selectProduct(product: Product): void {

    }
    insertCoin(coins: Coin[]): void {
        const totalSum = coins.reduce((a,b) => a += b, 0)
        this.vendingMachine.setTotalPayment(totalSum)
        console.log("Total payment " + totalSum)
        console.log("Total product price " + this.vendingMachine.getSelectedProduct()?.price)
        if(totalSum < (this.vendingMachine.getSelectedProduct()?.price ?? 0))   {
            console.log("Insufficient funds")
            this.vendingMachine.setState(this.vendingMachine.getIdleState())
            return
        }
        this.vendingMachine.setState(this.vendingMachine.getDispenseState())
    }
    dispenseProduct(): void {

    }
    returnChange(): void {

    }
}

class DispenseState implements VendingMachineState {
    private vendingMachine: VendingMachine;

    constructor(vendingMachine: VendingMachine) {
        this.vendingMachine = vendingMachine;
    }

    selectProduct(product: Product): void {
    }
    insertCoin(coin: Coin[]): void {
    }
    dispenseProduct(): void {
        const currentProduct = this.vendingMachine.getSelectedProduct() as Product
        this.vendingMachine.inventory.updateQuantity(currentProduct, (this.vendingMachine.inventory.getQuantity(currentProduct) ?? 0) - 1)
        console.log("Dispensed product")
        this.vendingMachine.setState(this.vendingMachine.getReturnChangeState())
    }
    returnChange(): void {

    }
}

class ReturnChangeState implements VendingMachineState {
    private vendingMachine: VendingMachine;

    constructor(vendingMachine: VendingMachine) {
        this.vendingMachine = vendingMachine;
    }

    selectProduct(product: Product): void {

    }
    insertCoin(coin: Coin[]): void {

    }
    dispenseProduct(): void {

    }
    returnChange(): void {
        if( (this.vendingMachine.getSelectedProduct()?.price ?? 0 ) < this.vendingMachine.getTotalPayment() )   {
            console.log("Returning change " + ( - (this.vendingMachine.getSelectedProduct()?.price ?? 0 ) + this.vendingMachine.getTotalPayment()))
        }
        else    {
            console.log("No change to return")
        }
        this.vendingMachine.setState(this.vendingMachine.getIdleState())
    }
}

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
        this.readyState = new GetReadyState(this);
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
        this.currentState.selectProduct(product)
    }

    insertCoin(coins: Coin[]): void {
        this.currentState.insertCoin(coins)
    }

    dispenseProduct(): void {
        this.currentState.dispenseProduct()
    }

    returnChange(): void {
        this.currentState.returnChange()
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

    resetPayment() {
        this.totalPayment = 0;
    }

    setTotalPayment(number: number) {
        this.totalPayment = number
    }
}

const vendingMachine = VendingMachine.getInstance();

const coke = new Product('Coke', 25);
const pepsi = new Product('Pepsi', 30);
const maaza = new Product('Maaza', 35);
const water = new Product('Water', 20);

vendingMachine.inventory.addProduct(coke, 10);
vendingMachine.inventory.addProduct(pepsi, 10);
vendingMachine.inventory.addProduct(maaza, 10);
vendingMachine.inventory.addProduct(water, 10);

console.log('\n ------------- Selecting product Coke\n');
vendingMachine.selectProduct(coke);

vendingMachine.insertCoin([Coin.TEN, Coin.TEN, Coin.TEN, Coin.FIVE]);

vendingMachine.dispenseProduct();

vendingMachine.returnChange();

console.log('\n ------------- Selecting product Pepsi\n');
vendingMachine.selectProduct(pepsi);

vendingMachine.insertCoin([Coin.TEN, Coin.TEN, Coin.TEN, Coin.FIVE]);

vendingMachine.dispenseProduct();

vendingMachine.returnChange();