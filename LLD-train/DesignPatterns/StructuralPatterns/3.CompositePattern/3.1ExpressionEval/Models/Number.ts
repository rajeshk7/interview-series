import ArithmeticExpression from "./ArithmeticExpression";

class Number implements ArithmeticExpression {

    number : number;

    constructor(number: number) {
        this.number = number;
    }

    evaluate(): number {
        return this.number;
    }

}

export default Number;