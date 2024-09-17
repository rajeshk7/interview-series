"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ConfigurationMemento_1 = require("./ConfigurationMemento");
var ConfigurationOriginator = /** @class */ (function () {
    function ConfigurationOriginator(height, width) {
        this.height = height;
        this.width = width;
    }
    ConfigurationOriginator.prototype.setHeight = function (height) {
        this.height = height;
    };
    ConfigurationOriginator.prototype.setWidth = function (width) {
        this.width = width;
    };
    ConfigurationOriginator.prototype.createMemento = function () {
        return new ConfigurationMemento_1.default(this.height, this.width);
    };
    ConfigurationOriginator.prototype.restore = function (memento) {
        this.height = memento.height;
        this.width = memento.width;
    };
    return ConfigurationOriginator;
}());
exports.default = ConfigurationOriginator;
