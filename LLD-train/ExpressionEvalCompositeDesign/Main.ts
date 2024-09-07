import Number from "./Models/Number";
import Expression from "./Models/Expression";
import Operator from "./Interface/Operator";
import Color from "../ConsoleColors";

const number1 = new Number(10);
const number2 = new Number(5);
const number3 = new Number(2);
const number4 = new Number(3);

const expression1 = new Expression(number1, number2, Operator.ADDITION);
console.log(`${Color.fgCyan}` + "Expression 1 : Adding 10 and 5 = " + expression1.evaluate());
const expression2 = new Expression(expression1, number3, Operator.MULTIPLICATION);
console.log(`${Color.fgCyan}` + "Expression 2 : Multiplying 15 and 2 = " + expression2.evaluate());
const expression3 = new Expression(expression2, number4, Operator.DIVISION);
console.log(`${Color.fgCyan}` + "Expression 3 : Dividing 30 and 3 = " + expression3.evaluate());