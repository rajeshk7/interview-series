"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Bidder = /** @class */ (function () {
    function Bidder(name, mediator) {
        this.name = name;
        this.mediator = mediator;
    }
    Bidder.prototype.placeBid = function (bid) {
        console.log("\n" + "\u001B[95m" /* Color.fgBrightMagenta */ + "".concat(this.name, " placed a bid of ").concat(bid) + "\u001B[0m" /* Color.reset */);
        this.mediator.placeBid(bid, this);
    };
    Bidder.prototype.receiveBid = function (bid) {
        console.log("\u001B[96m" /* Color.fgBrightCyan */ + " => ".concat(this.name, " received a bid of ").concat(bid) + "\u001B[0m" /* Color.reset */);
    };
    Bidder.prototype.getName = function () {
        return this.name;
    };
    return Bidder;
}());
exports.default = Bidder;
