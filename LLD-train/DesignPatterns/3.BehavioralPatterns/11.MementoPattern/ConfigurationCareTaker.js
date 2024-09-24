"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ConfigurationCareTaker = /** @class */ (function () {
    function ConfigurationCareTaker() {
        this.history = [];
    }
    ConfigurationCareTaker.prototype.addMemento = function (memento) {
        this.history.push(memento);
    };
    ConfigurationCareTaker.prototype.undo = function () {
        if (this.history.length === 0) {
            return undefined;
        }
        return this.history.pop();
    };
    return ConfigurationCareTaker;
}());
exports.default = ConfigurationCareTaker;
