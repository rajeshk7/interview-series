"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Inventory_1 = require("./Inventory");
var IdleState_1 = require("./States/IdleState");
var ReadyState_1 = require("./States/ReadyState");
var DispenseState_1 = require("./States/DispenseState");
var ReturnChangeState_1 = require("./States/ReturnChangeState");
var VendingMachine = /** @class */ (function () {
    function VendingMachine() {
        this.inventory = new Inventory_1.default();
        this.idleState = new IdleState_1.default(this);
        this.readyState = new ReadyState_1.default(this);
        this.returnChangeState = new ReturnChangeState_1.default(this);
        this.dispenseState = new DispenseState_1.default(this);
        this.currentState = this.idleState;
        this.selectedProduct = null;
        this.totalPayment = 0;
    }
    VendingMachine.getInstance = function () {
        if (!VendingMachine.instance) {
            VendingMachine.instance = new VendingMachine();
        }
        return VendingMachine.instance;
    };
    VendingMachine.prototype.selectProduct = function (product) {
        this.currentState.selectProduct(product);
    };
    VendingMachine.prototype.insertCoin = function (coin) {
        this.currentState.insertCoin(coin);
    };
    VendingMachine.prototype.dispenseProduct = function () {
        this.currentState.dispenseProduct();
    };
    VendingMachine.prototype.returnChange = function () {
        this.currentState.returnChange();
    };
    VendingMachine.prototype.setState = function (state) {
        this.currentState = state;
    };
    VendingMachine.prototype.getIdleState = function () {
        return this.idleState;
    };
    VendingMachine.prototype.getReadyState = function () {
        return this.readyState;
    };
    VendingMachine.prototype.getReturnChangeState = function () {
        return this.returnChangeState;
    };
    VendingMachine.prototype.getDispenseState = function () {
        return this.dispenseState;
    };
    VendingMachine.prototype.getSelectedProduct = function () {
        return this.selectedProduct;
    };
    VendingMachine.prototype.setSelectedProduct = function (product) {
        this.selectedProduct = product;
    };
    VendingMachine.prototype.resetSelectedProduct = function () {
        this.selectedProduct = null;
    };
    VendingMachine.prototype.getTotalPayment = function () {
        return this.totalPayment;
    };
    VendingMachine.prototype.addCoin = function (coin) {
        this.totalPayment += coin.getValue();
        console.log('Total payment:', this.totalPayment);
    };
    VendingMachine.prototype.resetPayment = function () {
        this.totalPayment = 0;
    };
    return VendingMachine;
}());
exports.default = VendingMachine;
