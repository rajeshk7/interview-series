import AbstractExpression from "./Interface/AbstractExpression";
import Context from "./Context";

class NumberTerminalExpression implements AbstractExpression    {
    stringNumber: string;

    constructor(stringNumber: string) {
        this.stringNumber = stringNumber;
    }

    interpret(context: Context): number {
        return context.get(this.stringNumber);
    }
}

export default NumberTerminalExpression;