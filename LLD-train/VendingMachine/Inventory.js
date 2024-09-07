"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ItemShelf_1 = require("./Model/ItemShelf");
var Inventory = /** @class */ (function () {
    function Inventory(itemCount) {
        this.inventory = [];
        this.inventory = new Array(itemCount);
        this.initializeEmptyInventory();
    }
    Inventory.prototype.initializeEmptyInventory = function () {
        var startCode = 101;
        for (var i = 0; i < this.inventory.length; i++) {
            this.inventory[i] = new ItemShelf_1.default();
            this.inventory[i].setCode(startCode++);
            this.inventory[i].setIsSoldOut(false);
        }
    };
    Inventory.prototype.getInventory = function () {
        return this.inventory;
    };
    Inventory.prototype.setInventory = function (inventory) {
        this.inventory = inventory;
    };
    Inventory.prototype.addItem = function (item, produceCode) {
        for (var i = 0; i < this.inventory.length; i++) {
            if (this.inventory[i].getCode() === produceCode) {
                if (this.inventory[i].getIsSoldOut()) {
                    console.log("Item is already present in the inventory");
                }
                else {
                    this.inventory[i].setItem(item);
                    this.inventory[i].setIsSoldOut(false);
                }
            }
        }
    };
    Inventory.prototype.getItem = function (productCode) {
        for (var i = 0; i < this.inventory.length; i++) {
            if (this.inventory[i].getCode() === productCode) {
                if (this.inventory[i].getIsSoldOut()) {
                    console.log("Item is already present in the inventory");
                }
                else {
                    return this.inventory[i].getItem();
                }
            }
        }
        return null;
    };
    Inventory.prototype.updateSoldOutItem = function (productCode) {
        for (var i = 0; i < this.inventory.length; i++) {
            if (this.inventory[i].getCode() === productCode) {
                this.inventory[i].setIsSoldOut(true);
            }
        }
    };
    return Inventory;
}());
exports.default = Inventory;
