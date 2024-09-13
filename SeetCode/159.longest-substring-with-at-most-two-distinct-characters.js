/*
Given a string s , find the length of the longest substring t  that contains at most 2 distinct characters.
    Example 1:

    Input: "eceba"
    Output: 3
    Explanation: t is "ece" which its length is 3.
    Example 2:

    Input: "ccaabbb"
    Output: 5
    Explanation: t is "aabbb" which its length is 5.
*/

const finder = (str) => {
    let fir = null, sec = null, firi = -1, seci = -1, max = 0, count= 0

    for( let i = 0 ; i < str.length ; i++ ) {
        if(!fir || fir == str[i]) {

        }
        else if(!sec || sec == str[i]) {
          sec = fir
          seci = firi
        }
        else {
          sec = fir
          count = (i - seci - 1)
          seci = firi
        }

        fir = str[i]
        firi = i
        count++
        max = Math.max(max, count)
    }

    return max
}

console.log(finder( "abaccc" ))
console.log(finder( "eceba" ))
console.log(finder( "ccaabbb" ))
console.log(finder( "abaccc" ))
console.log(finder( "abaccc" ))