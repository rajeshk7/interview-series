"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Expression = /** @class */ (function () {
    function Expression(left, right, operator) {
        this.left = left;
        this.right = right;
        this.operator = operator;
    }
    Expression.prototype.evaluate = function () {
        switch (this.operator) {
            case "+" /* Operator.ADDITION */:
                return (this.left.evaluate() + this.right.evaluate());
            case "-" /* Operator.SUBTRACTION */:
                return (this.left.evaluate() - this.right.evaluate());
            case "*" /* Operator.MULTIPLICATION */:
                return (this.left.evaluate() * this.right.evaluate());
            case "/" /* Operator.DIVISION */:
                return (this.left.evaluate() / this.right.evaluate());
        }
    };
    return Expression;
}());
exports.default = Expression;
