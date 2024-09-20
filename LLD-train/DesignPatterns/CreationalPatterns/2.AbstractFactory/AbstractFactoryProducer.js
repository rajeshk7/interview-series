"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LuxuryCarFactory_1 = require("./Models/LuxuryCarFactory");
var EconomicCarFactory_1 = require("./Models/EconomicCarFactory");
var AbstractFactoryProducer = /** @class */ (function () {
    function AbstractFactoryProducer() {
    }
    AbstractFactoryProducer.getFactory = function (type) {
        if (type === "Luxury") {
            return new LuxuryCarFactory_1.default();
        }
        else {
            return new EconomicCarFactory_1.default();
        }
    };
    return AbstractFactoryProducer;
}());
exports.default = AbstractFactoryProducer;
