"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ConfigurationMemento = /** @class */ (function () {
    function ConfigurationMemento(height, width) {
        this.height = height;
        this.width = width;
    }
    ConfigurationMemento.prototype.getHeight = function () {
        return this.height;
    };
    ConfigurationMemento.prototype.getWidth = function () {
        return this.width;
    };
    return ConfigurationMemento;
}());
exports.default = ConfigurationMemento;
