"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SumNonTerminalExpression = /** @class */ (function () {
    function SumNonTerminalExpression(leftExpression, rightExpression) {
        this.leftExpression = leftExpression;
        this.rightExpression = rightExpression;
    }
    SumNonTerminalExpression.prototype.interpret = function (context) {
        return this.leftExpression.interpret(context) + this.rightExpression.interpret(context);
    };
    return SumNonTerminalExpression;
}());
exports.default = SumNonTerminalExpression;
