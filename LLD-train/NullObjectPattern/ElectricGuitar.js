"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ElectricGuitar = /** @class */ (function () {
    function ElectricGuitar() {
    }
    ElectricGuitar.prototype.getIsClassicalInstrument = function () {
        console.log("Its not");
    };
    ElectricGuitar.prototype.getCanPlayWithoutElectricity = function () {
        console.log("It cannot");
    };
    return ElectricGuitar;
}());
exports.default = ElectricGuitar;
