/*

Numbers can be regarded as product of its factors. For example,

8 = 2 x 2 x 2;
  = 2 x 4.
Write a function that takes an integer n and return all possible combinations of its factors.

Note:

You may assume that n is always positive.
Factors should be greater than 1 and less than n.
Example 1:

    Input: 1
    Output: []
    Example 2:

    Input: 37
    Output:[]
    Example 3:

    Input: 12
    Output:
    [
        [2, 6],
        [2, 2, 3],
        [3, 4]
    ]
*/

const getFactors = (n) => {
    const result = [];

    const backtrack = (num, index, current) => {
        for( let i = index ; i*i <= num ; i++ )   {
            if(num %i == 0) {
                current.push(i)
                current.push(num/i)
                result.push([...current])
                current.pop()
                backtrack(num/i, i, current)
                current.pop()
            }
        }
    } 

    backtrack(n, 2, []);
    return result;
};

// Example usage:
console.log(getFactors(32)); // Output: []
console.log(getFactors(37)); // Output: []
console.log(getFactors(12)); // Output: [ [ 2, 6 ], [ 2, 2, 3 ], [ 3, 4 ] ]