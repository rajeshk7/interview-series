"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var File = /** @class */ (function () {
    function File(name) {
        this.name = name;
    }
    File.prototype.ls = function () {
        console.log("".concat("\u001B[95m" /* Colors.fgBrightMagenta */) + this.name + "".concat("\u001B[0m" /* Colors.reset */));
    };
    return File;
}());
exports.default = File;
