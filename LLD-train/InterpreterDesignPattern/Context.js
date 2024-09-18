"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Context = /** @class */ (function () {
    function Context() {
        this.contextMap = new Map();
    }
    Context.prototype.put = function (key, value) {
        this.contextMap.set(key, value);
    };
    Context.prototype.get = function (key) {
        return this.contextMap.get(key);
    };
    return Context;
}());
exports.default = Context;
