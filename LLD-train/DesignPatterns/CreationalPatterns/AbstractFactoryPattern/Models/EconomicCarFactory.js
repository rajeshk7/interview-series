"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EconomicCar1_1 = require("./EconomicCar1");
var EconomicCar2_1 = require("./EconomicCar2");
var EconomicCarFactory = /** @class */ (function () {
    function EconomicCarFactory() {
    }
    EconomicCarFactory.prototype.getInstance = function (price) {
        if (price < 160000) {
            return new EconomicCar1_1.default();
        }
        else {
            return new EconomicCar2_1.default();
        }
    };
    return EconomicCarFactory;
}());
exports.default = EconomicCarFactory;
