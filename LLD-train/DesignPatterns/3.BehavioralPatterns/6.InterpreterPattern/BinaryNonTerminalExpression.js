"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BinaryNonTerminalExpression = /** @class */ (function () {
    function BinaryNonTerminalExpression(leftExpression, rightExpression, operator) {
        this.leftExpression = leftExpression;
        this.rightExpression = rightExpression;
        this.operator = operator;
    }
    BinaryNonTerminalExpression.prototype.interpret = function (context) {
        switch (this.operator) {
            case '+':
                return this.leftExpression.interpret(context) + this.rightExpression.interpret(context);
            case '*':
                return this.leftExpression.interpret(context) * this.rightExpression.interpret(context);
            default:
                return 0;
        }
    };
    return BinaryNonTerminalExpression;
}());
exports.default = BinaryNonTerminalExpression;
