"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PrintSubscriber = /** @class */ (function () {
    function PrintSubscriber(name) {
        this.name = name;
    }
    PrintSubscriber.prototype.onMessage = function (message) {
        console.log("\u001B[95m" /* ConsoleColors.fgBrightMagenta */ + "Message received by ".concat(this.name, ": ").concat(message.getContent()));
        console.log("\u001B[0m" /* ConsoleColors.reset */);
    };
    return PrintSubscriber;
}());
exports.default = PrintSubscriber;
