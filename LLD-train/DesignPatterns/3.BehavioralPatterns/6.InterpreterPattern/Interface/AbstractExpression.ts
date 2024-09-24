import Context from "../Context";

interface AbstractExpression    {
    interpret(context: Context);
}

export default AbstractExpression;