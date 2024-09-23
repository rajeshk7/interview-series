import Context from "./Context";
import SumNonTerminalExpression from "./SumNonTerminalExpression";
import MultiplyNonTerminalExpression from "./MultiplyNonTerminalExpression";
import NumberTerminalExpression from "./NumberTerminalExpression";
import BinaryNonTerminalExpression from "./BinaryNonTerminalExpression";

const context = new Context();
context.put("a", 5);
context.put("b", 10);
context.put("c", 15);
context.put("d", 20);

const mulExpression = new MultiplyNonTerminalExpression(new NumberTerminalExpression("a"), new NumberTerminalExpression("b"));
console.log(mulExpression.interpret(context));

console.log("\n")

const sumExpression = new SumNonTerminalExpression(new NumberTerminalExpression("c"), new NumberTerminalExpression("d"));
console.log(sumExpression.interpret(context));

console.log("\n")

const complexExpression = new SumNonTerminalExpression(mulExpression, sumExpression);
console.log(complexExpression.interpret(context));

console.log("\n")

const binaryExp = new BinaryNonTerminalExpression(mulExpression, sumExpression, "+");
console.log(binaryExp.interpret(context));