/*
Given strings s1 and s2, return the minimum contiguous substring part of s1, so that s2 is a subsequence of the part.
If there is no such window in s1 that covers all characters in s2, return the empty string "". 
If there are multiple such minimum-length windows, return the one with the left-most starting index.

    Example 1:

    Input: s1 = "abcdebdde", s2 = "bde"
    Output: "bcde"
    Explanation: 
    "bcde" is the answer because it occurs before "bdde" which has the same length.
    "deb" is not a smaller window because the elements of s2 in the window must occur in order.
    
    Example 2:

    Input: s1 = "jmeqksfrsdcmsiwvaovztaqenprpvnbstl", s2 = "u"
    Output: ""
*/

function minWindow(s1, s2) {
    let minLen = Infinity, start = -1;

    for (let i = 0; i < s1.length; i++) {
        if (s1[i] === s2[0]) {
            let k = 0;
            for (let j = i; j < s1.length; j++) {
                if (s1[j] === s2[k]) {
                    k++;
                }
                if (k === s2.length) {
                    if (j - i + 1 < minLen) {
                        minLen = j - i + 1;
                        start = i;
                    }
                    break;
                }
            }
        }
    }

    return start === -1 ? "" : s1.substring(start, start + minLen);
}

// Example 1
console.log(minWindow("abcdebdde", "bde")); // Output: "bcde"
console.log(minWindow("jmeqksfrsdcmsiwvaovztaqenprpvnbstl", "u")); // Output: ""
console.log(minWindow("geeksforgeeks", "eksrg")); // Output: "eksforg"
console.log(minWindow("abcdebdde", "bde")); // Output: "bcde"