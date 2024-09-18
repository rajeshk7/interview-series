"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var PaymentFlow_1 = require("./PaymentFlow");
var PayToFriend = /** @class */ (function (_super) {
    __extends(PayToFriend, _super);
    function PayToFriend() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PayToFriend.prototype.validateRequest = function () {
        console.log("Validating request for friend payment");
    };
    PayToFriend.prototype.calculateFees = function () {
        console.log("Calculating fees for friend payment");
    };
    PayToFriend.prototype.debitAmount = function () {
        console.log("Debiting amount for friend payment");
    };
    PayToFriend.prototype.creditAmount = function () {
        console.log("Crediting amount for friend payment");
    };
    return PayToFriend;
}(PaymentFlow_1.default));
exports.default = PayToFriend;
