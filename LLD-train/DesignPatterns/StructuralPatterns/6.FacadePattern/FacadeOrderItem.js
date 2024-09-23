"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Invoice_1 = require("./Models/Invoice");
var Product_1 = require("./Models/Product");
var Payment_1 = require("./Models/Payment");
var Notification_1 = require("./Models/Notification");
var OrderFacade = /** @class */ (function () {
    function OrderFacade() {
        this.invoice = new Invoice_1.default();
        this.product = new Product_1.default();
        this.payment = new Payment_1.default();
        this.notification = new Notification_1.default();
    }
    OrderFacade.prototype.placeOrder = function () {
        var product = this.product.getProduct();
        this.invoice.printInvoice();
        this.payment.makePayment();
        this.notification.sendNotification();
        console.log("\u001B[92m" /* Color.fgBrightGreen */, 'Order placed successfully');
    };
    return OrderFacade;
}());
exports.default = OrderFacade;
