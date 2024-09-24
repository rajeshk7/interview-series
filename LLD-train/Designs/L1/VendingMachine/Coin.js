"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CoinType_1 = require("./CoinType");
var Coin = /** @class */ (function () {
    function Coin(coinType) {
        Coin.coinValueMap.set(CoinType_1.default.PENNY, 1);
        Coin.coinValueMap.set(CoinType_1.default.NICKEL, 5);
        Coin.coinValueMap.set(CoinType_1.default.DIME, 10);
        Coin.coinValueMap.set(CoinType_1.default.QUARTER, 25);
        this.coinType = coinType;
    }
    Coin.prototype.getValue = function () {
        return this.coinType ? Coin.coinValueMap.get(this.coinType) : 0;
    };
    Coin.coinValueMap = new Map();
    return Coin;
}());
exports.default = Coin;
