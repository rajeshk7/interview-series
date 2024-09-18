/*

Given two strings low and high that represent two integers low and high where low <= high, 
return the number of strobogrammatic numbers in the range [low, high].
A strobogrammatic number is a number that looks the same when rotated 180 degrees (looked at upside down).

    Example 1:
    Input: low = "50", high = "100"
    Output: 3

    Example 2:
    Input: low = "0", high = "0"
    Output: 1

*/

const strobogrammaticNumberII = (n) => {
    const pairs = [['0', '0'], ['1', '1'], ['6', '9'], ['8', '8'], ['9', '6']];
    const res = [];

    const generate = (str, num) => {
        if (num === 0) {
            if (str.length === 1 || str[0] !== '0') {
                res.push(str);
            }
            return;
        }

        for (const [left, right] of pairs) {
            generate(left + str + right, num - 2);
        }
    };

    if (n % 2 === 1) {
        generate('1', n - 1);
        generate('8', n - 1);
        generate('0', n - 1);
    } else {
        generate('', n);
    }

    return res;
};

const strobogrammaticNumberIII = (low, high) => {
    const res = [], l = low.toString(), h = high.toString();

    for (let i = l.length; i <= h.length; i++) {
        const arr = strobogrammaticNumberII(i);
        for (const num of arr) {
            if ((num.length === l.length && num >= l) || num.length > l.length) {
                if ((num.length === h.length && num <= h) || num.length < h.length) {
                    res.push(num);
                }
            }
        }
    }

    return res.length;
};

// Example usage
console.log(strobogrammaticNumberIII("50", "100")); // 3
console.log(strobogrammaticNumberIII("0", "0")); // 1
console.log(strobogrammaticNumberIII("0", "1000")); // 12