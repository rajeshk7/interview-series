"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Harmonium = /** @class */ (function () {
    function Harmonium() {
    }
    Harmonium.prototype.getIsClassicalInstrument = function () {
        console.log("Yup, it is");
    };
    Harmonium.prototype.getCanPlayWithoutElectricity = function () {
        console.log("It can");
    };
    return Harmonium;
}());
exports.default = Harmonium;
