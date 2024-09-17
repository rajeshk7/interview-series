/*

Given a string s and an integer k, return the length of the longest substring of s that contains at most k distinct characters.

    Example 1:
    Input: s = "eceba", k = 2
    Output: 3
    Explanation: The substring is "ece" with length 3.

    Example 2:
    Input: s = "aa", k = 1
    Output: 2
    Explanation: The substring is "aa" with length 2.

*/

function lengthOfLongestSubstringKDistinct(str, k) {
    let count = new Map(), left = 0;

    for (const char of str) {
        count.set(char, (count.get(char) ?? 0) + 1);
        if (count.size > k) {
            count.set(str[left], count.get(str[left]) - 1);
            if (count.get(str[left]) === 0) {
                count.delete(str[left]);
            }
            left++;
        }
    }
    return str.length - left;
}

console.log(lengthOfLongestSubstringKDistinct("", 2)); // Expected output: 0
console.log(lengthOfLongestSubstringKDistinct("abc", 0)); // Expected output: 0
console.log(lengthOfLongestSubstringKDistinct("abc", 5)); // Expected output: 3
console.log(lengthOfLongestSubstringKDistinct("aaaaa", 1)); // Expected output: 5
console.log(lengthOfLongestSubstringKDistinct("abcdef", 3)); // Expected output: 3
console.log(lengthOfLongestSubstringKDistinct("eceba", 2)) // A B A C B D
console.log(lengthOfLongestSubstringKDistinct("aa", 1)) // A A B