"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ElectricGuitar_1 = require("./ElectricGuitar");
var NullObject_1 = require("./NullObject");
var Harmonium_1 = require("./Harmonium");
var MusicFactory = /** @class */ (function () {
    function MusicFactory() {
    }
    MusicFactory.prototype.getInstrumentObject = function (name) {
        if (name === 'ElectricGuitar')
            return new ElectricGuitar_1.default();
        else if (name === 'Harmonium')
            return new Harmonium_1.default();
        else
            return new NullObject_1.default();
    };
    return MusicFactory;
}());
exports.default = MusicFactory;
