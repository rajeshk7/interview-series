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
var LuxuryCar2 = /** @class */ (function (_super) {
    __extends(LuxuryCar2, _super);
    function LuxuryCar2() {
        var _this = _super.call(this) || this;
        console.log("Luxury Car 2 is created");
        return _this;
    }
    LuxuryCar2.prototype.getTopSpeed = function () {
        console.log("Top speed of Luxury Car is 200km/hr");
    };
    LuxuryCar2.prototype.getCarName = function () {
        console.log("Luxury Car");
    };
    return LuxuryCar2;
}(Car_1.default));
exports.default = LuxuryCar2;
