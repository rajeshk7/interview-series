"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Car_1 = require("../Car");
var EconomicCar2 = /** @class */ (function (_super) {
    __extends(EconomicCar2, _super);
    function EconomicCar2() {
        var _this = _super.call(this) || this;
        console.log("Economic Car 2 is created");
        return _this;
    }
    EconomicCar2.prototype.getTopSpeed = function () {
        console.log("Top speed of Economic Car 2 is 80 km/hr");
    };
    EconomicCar2.prototype.getCarName = function () {
        console.log("Economic Car 2");
    };
    return EconomicCar2;
}(Car_1.default));
exports.default = EconomicCar2;
