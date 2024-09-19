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
var CouponDecorator_1 = require("../Model/CouponDecorator");
var TypeCouponDecorator = /** @class */ (function (_super) {
    __extends(TypeCouponDecorator, _super);
    function TypeCouponDecorator(product, discountPercentage) {
        var _this = _super.call(this, product.name, product.price, product.type) || this;
        _this.product = product;
        _this.discountPercentage = discountPercentage;
        return _this;
    }
    TypeCouponDecorator.prototype.getPrice = function () {
        return this.product.getPrice() * (1 - this.discountPercentage / 100);
    };
    return TypeCouponDecorator;
}(CouponDecorator_1.default));
exports.default = TypeCouponDecorator;
