"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PayToMerchant_1 = require("./PayToMerchant");
var PayToFriend_1 = require("./PayToFriend");
var paymentFlow = new PayToFriend_1.default();
paymentFlow.sendMoney();
console.log("\n");
var paymentFlow2 = new PayToMerchant_1.default();
paymentFlow2.sendMoney();
