/*
Implement a basic calculator to evaluate a simple expression string.
The expression string contains only non-negative integers, '+', '-', '*', '/' operators, and open '(' and closing parentheses ')'. 
The integer division should truncate toward zero.

You may assume that the given expression is always valid. All intermediate results will be in the range of [-231, 231 - 1].

Note: You are not allowed to use any built-in function which evaluates strings as mathematical expressions, such as eval().

    Example 1:

    Input: s = "1+1"
    Output: 2
    Example 2:

    Input: s = "6-4/2"
    Output: 4
    Example 3:

    Input: s = "2*(5+5*2)/3+(6/2+8)"
    Output: 21
*/

function calculate(s) {
    let stack = [], num = 0, sign = '+', n = s.length;

    for (let i = 0; i < n; i++) {
        let char = s[i];

        if (!isNaN(char) && char !== ' ') {
            num = num * 10 + Number(char);
        }

        if (isNaN(char) && char !== ' ' || i === n - 1) {
            if (char === '(') {
                let j = i, cnt = 0;
                for (; i < n; i++) {
                    if (s[i] === '(') 
                        cnt++;
                    if (s[i] === ')') 
                        cnt--;
                    if (cnt === 0) 
                        break;
                }
                num = calculate(s.substring(j + 1, i));
            }

            if (sign === '+') 
                stack.push(num);
            else if (sign === '-') 
                stack.push(-num);
            else if (sign === '*') 
                stack.push(stack.pop() * num);
            else if (sign === '/')  
                stack.push(Math.trunc(stack.pop() / num));

            sign = char;
            num = 0;
        }
    }

    return stack.reduce((a, b) => a + b);
}

// Example usage:
console.log(calculate("1+1")); // Output: 2
console.log(calculate("6-4/2")); // Output: 4
console.log(calculate("2*(5+5*2)/3+(6/2+8)")); // Output: 21