import Context from "./Context";
import AbstractExpression from "./Interface/AbstractExpression";

class BinaryNonTerminalExpression implements AbstractExpression    {
    leftExpression: AbstractExpression;
    rightExpression: AbstractExpression;
    operator: string;

    constructor(leftExpression: AbstractExpression, rightExpression: AbstractExpression, operator: string) {
        this.leftExpression = leftExpression;
        this.rightExpression = rightExpression;
        this.operator = operator;
    }

    interpret(context: Context): number {
        switch(this.operator) {
            case '+':
                return this.leftExpression.interpret(context) + this.rightExpression.interpret(context);
            case '*':
                return this.leftExpression.interpret(context) * this.rightExpression.interpret(context);
            default:
                return 0;
        }
    }
}

export default BinaryNonTerminalExpression;