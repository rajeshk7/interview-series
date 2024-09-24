"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LuxuryCar1_1 = require("./LuxuryCar1");
var LuxuryCar2_1 = require("./LuxuryCar2");
var LuxuryCarFactory = /** @class */ (function () {
    function LuxuryCarFactory() {
    }
    LuxuryCarFactory.prototype.getInstance = function (price) {
        if (price > 500000) {
            return new LuxuryCar1_1.default();
        }
        else {
            return new LuxuryCar2_1.default();
        }
    };
    return LuxuryCarFactory;
}());
exports.default = LuxuryCarFactory;
