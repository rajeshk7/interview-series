"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NumberTerminalExpression = /** @class */ (function () {
    function NumberTerminalExpression(stringNumber) {
        this.stringNumber = stringNumber;
    }
    NumberTerminalExpression.prototype.interpret = function (context) {
        return context.get(this.stringNumber);
    };
    return NumberTerminalExpression;
}());
exports.default = NumberTerminalExpression;
