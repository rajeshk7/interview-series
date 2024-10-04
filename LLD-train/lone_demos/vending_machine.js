"use strict";
var Coin;
(function (Coin) {
    Coin[Coin["ONE"] = 1] = "ONE";
    Coin[Coin["TWO"] = 2] = "TWO";
    Coin[Coin["FIVE"] = 5] = "FIVE";
    Coin[Coin["TEN"] = 10] = "TEN";
})(Coin || (Coin = {}));
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}
class Inventory {
    constructor() {
        this.products = new Map();
    }
    addProduct(product, quantity) {
        var _a;
        this.products.set(product, ((_a = this.products.get(product)) !== null && _a !== void 0 ? _a : 0) + quantity);
    }
    removeProduct(product) {
        this.products.delete(product);
    }
    updateQuantity(product, quantity) {
        this.products.set(product, quantity);
    }
    getQuantity(product) {
        return this.products.get(product);
    }
    isAvailable(product) {
        var _a;
        return this.products.has(product) && ((_a = this.products.get(product)) !== null && _a !== void 0 ? _a : 0) > 0;
    }
}
class IdleState {
    constructor(vendingMachine) {
        this.vendingMachine = vendingMachine;
    }
    selectProduct(product) {
        if (this.vendingMachine.inventory.isAvailable(product)) {
            this.vendingMachine.setSelectedProduct(product);
            this.vendingMachine.setState(this.vendingMachine.getReadyState());
            console.log("Alpha product selected and sent to next state ");
        }
    }
    insertCoin(coin) {
    }
    dispenseProduct() {
    }
    returnChange() {
    }
}
class GetReadyState {
    constructor(vendingMachine) {
        this.vendingMachine = vendingMachine;
    }
    selectProduct(product) {
    }
    insertCoin(coins) {
        var _a, _b, _c;
        const totalSum = coins.reduce((a, b) => a += b, 0);
        this.vendingMachine.setTotalPayment(totalSum);
        console.log("Total payment " + totalSum);
        console.log("Total product price " + ((_a = this.vendingMachine.getSelectedProduct()) === null || _a === void 0 ? void 0 : _a.price));
        if (totalSum < ((_c = (_b = this.vendingMachine.getSelectedProduct()) === null || _b === void 0 ? void 0 : _b.price) !== null && _c !== void 0 ? _c : 0)) {
            console.log("Insufficient funds");
            this.vendingMachine.setState(this.vendingMachine.getIdleState());
            return;
        }
        this.vendingMachine.setState(this.vendingMachine.getDispenseState());
    }
    dispenseProduct() {
    }
    returnChange() {
    }
}
class DispenseState {
    constructor(vendingMachine) {
        this.vendingMachine = vendingMachine;
    }
    selectProduct(product) {
    }
    insertCoin(coin) {
    }
    dispenseProduct() {
        var _a;
        const currentProduct = this.vendingMachine.getSelectedProduct();
        this.vendingMachine.inventory.updateQuantity(currentProduct, ((_a = this.vendingMachine.inventory.getQuantity(currentProduct)) !== null && _a !== void 0 ? _a : 0) - 1);
        console.log("Dispensed product");
        this.vendingMachine.setState(this.vendingMachine.getReturnChangeState());
    }
    returnChange() {
    }
}
class ReturnChangeState {
    constructor(vendingMachine) {
        this.vendingMachine = vendingMachine;
    }
    selectProduct(product) {
    }
    insertCoin(coin) {
    }
    dispenseProduct() {
    }
    returnChange() {
        var _a, _b, _c, _d;
        if (((_b = (_a = this.vendingMachine.getSelectedProduct()) === null || _a === void 0 ? void 0 : _a.price) !== null && _b !== void 0 ? _b : 0) < this.vendingMachine.getTotalPayment()) {
            console.log("Returning change " + (-((_d = (_c = this.vendingMachine.getSelectedProduct()) === null || _c === void 0 ? void 0 : _c.price) !== null && _d !== void 0 ? _d : 0) + this.vendingMachine.getTotalPayment()));
        }
        else {
            console.log("No change to return");
        }
        this.vendingMachine.setState(this.vendingMachine.getIdleState());
    }
}
class VendingMachine {
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
    selectProduct(product) {
        this.currentState.selectProduct(product);
    }
    insertCoin(coins) {
        this.currentState.insertCoin(coins);
    }
    dispenseProduct() {
        this.currentState.dispenseProduct();
    }
    returnChange() {
        this.currentState.returnChange();
    }
    setState(state) {
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
    setSelectedProduct(product) {
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
    setTotalPayment(number) {
        this.totalPayment = number;
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
