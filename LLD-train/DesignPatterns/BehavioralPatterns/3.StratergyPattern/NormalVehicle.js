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
var Vehicle_1 = require("./Vehicle");
var NormalDrvieStratergy_1 = require("./Stratergy/NormalDrvieStratergy");
var NormalVehicle = /** @class */ (function (_super) {
    __extends(NormalVehicle, _super);
    function NormalVehicle() {
        return _super.call(this, new NormalDrvieStratergy_1.default()) || this;
    }
    return NormalVehicle;
}(Vehicle_1.default));
exports.default = NormalVehicle;
