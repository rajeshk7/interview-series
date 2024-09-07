"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Directory = /** @class */ (function () {
    function Directory(name) {
        this.name = name;
        this.children = [];
    }
    Directory.prototype.add = function (file) {
        this.children.push(file);
    };
    Directory.prototype.ls = function () {
        console.log("".concat("\u001B[91m" /* Colors.fgBrightRed */) + this.name + "".concat("\u001B[0m" /* Colors.reset */, "\n"));
        for (var _i = 0, _a = this.children; _i < _a.length; _i++) {
            var child = _a[_i];
            child.ls();
        }
    };
    return Directory;
}());
exports.default = Directory;
