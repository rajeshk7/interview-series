import ArithmeticExpression from "./ArithmeticExpression";
import Operator from "../Interface/Operator";

class Expression implements ArithmeticExpression    {
    left: ArithmeticExpression;
    right: ArithmeticExpression;
    operator: Operator;

    constructor(left: ArithmeticExpression, right: ArithmeticExpression, operator: Operator) {
        this.left = left;
        this.right = right;
        this.operator = operator;
    }

    evaluate(): number {
        switch (this.operator) {
            case Operator.ADDITION:
                return (this.left.evaluate() + this.right.evaluate());
            case Operator.SUBTRACTION:
                return (this.left.evaluate() - this.right.evaluate());
            case Operator.MULTIPLICATION:
                return (this.left.evaluate() * this.right.evaluate());
            case Operator.DIVISION:
                return (this.left.evaluate() / this.right.evaluate());
        }
    }
}

export default Expression;