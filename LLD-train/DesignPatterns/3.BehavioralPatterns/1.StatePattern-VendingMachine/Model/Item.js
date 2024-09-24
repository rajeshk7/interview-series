"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Item = /** @class */ (function () {
    function Item(type, price) {
        this.type = type;
        this.price = price;
    }
    Item.prototype.getType = function () {
        return this.type;
    };
    Item.prototype.getPrice = function () {
        return this.price;
    };
    Item.prototype.setType = function (type) {
        this.type = type;
    };
    Item.prototype.setPrice = function (price) {
        this.price = price;
    };
    Item.prototype.getName = function () {
        switch (this.type) {
            case 0 /* ItemType.COKE */:
                return "Coke";
            case 1 /* ItemType.PEPSI */:
                return "Pepsi";
            case 3 /* ItemType.WATER */:
                return "Water";
            case 2 /* ItemType.JUICE */:
                return "Juice";
            default:
                return "Invalid item";
        }
    };
    return Item;
}());
exports.default = Item;
