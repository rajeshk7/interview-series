import AbstractExpression from "./Interface/AbstractExpression";
import Context from "./Context";

class MultiplyNonTerminalExpression implements AbstractExpression    {
    leftExpression: AbstractExpression;
    rightExpression: AbstractExpression;

    constructor(leftExpression: AbstractExpression, rightExpression: AbstractExpression) {
        this.leftExpression = leftExpression;
        this.rightExpression = rightExpression;
    }

    interpret(context: Context): number {
        return this.leftExpression.interpret(context) * this.rightExpression.interpret(context);
    }
}

export default MultiplyNonTerminalExpression;