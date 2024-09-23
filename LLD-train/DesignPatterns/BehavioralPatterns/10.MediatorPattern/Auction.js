"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Auction = /** @class */ (function () {
    function Auction() {
        this.bidders = [];
    }
    Auction.prototype.addColleague = function (colleague) {
        console.log("Adding ".concat(colleague.getName(), " to the auction"));
        this.bidders.push(colleague);
    };
    Auction.prototype.placeBid = function (bid, bidder) {
        this.bidders.forEach(function (b) {
            if (b !== bidder) {
                b.receiveBid(bid);
            }
        });
    };
    return Auction;
}());
exports.default = Auction;
