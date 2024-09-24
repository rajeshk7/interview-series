"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MultiplyNonTerminalExpression = /** @class */ (function () {
    function MultiplyNonTerminalExpression(leftExpression, rightExpression) {
        this.leftExpression = leftExpression;
        this.rightExpression = rightExpression;
    }
    MultiplyNonTerminalExpression.prototype.interpret = function (context) {
        return this.leftExpression.interpret(context) * this.rightExpression.interpret(context);
    };
    return MultiplyNonTerminalExpression;
}());
exports.default = MultiplyNonTerminalExpression;
