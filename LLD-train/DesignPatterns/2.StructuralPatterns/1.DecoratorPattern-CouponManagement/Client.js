"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ShoppingCart_1 = require("./ShoppingCart");
var BookItem_1 = require("./Implementation/BookItem");
var ClothingItem_1 = require("./Implementation/ClothingItem");
var item1 = new BookItem_1.default("The Catcher in the Rye", 10);
var item2 = new ClothingItem_1.default("T-shirt", 20);
var cart = new ShoppingCart_1.default();
cart.addTOCart(item1);
cart.addTOCart(item2);
console.log("\u001B[95m" /* Color.fgBrightMagenta */ + cart.getTotalPrice());
