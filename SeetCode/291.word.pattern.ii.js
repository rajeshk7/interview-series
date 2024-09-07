/*
    Given a pattern and a string str, find if str follows the same pattern.
    Here follow means a full match, 
    such that there is a bijection between a letter in pattern and a non-empty substring in str.

    Example 1:

    Input: pattern = "abab", str = "redblueredblue"
    Output: true
    Example 2:

    Input: pattern = pattern = "aaaa", str = "asdasdasdasd"
    Output: true
    Example 3:

    Input: pattern = "aabb", str = "xyzabcxzyabc"
    Output: false
*/

function wordPatternMatch(pattern, str) {
    
    function isMatch(pattern, str, pMap, sMap) {
        if (pattern.length === 0) 
            return str.length === 0;

        const char = pattern[0];

        for (let i = 1; i <= str.length; i++) {
            const substr = str.slice(0, i);

            if (pMap[char] === undefined && sMap[substr] === undefined) {
                pMap[char] = substr;
                sMap[substr] = char;

                if (isMatch(pattern.slice(1), str.slice(i), pMap, sMap)) {
                    return true;
                }

                delete pMap[char];
                delete sMap[substr];
            } else if (pMap[char] === substr) {
                if (isMatch(pattern.slice(1), str.slice(i), pMap, sMap)) {
                    return true;
                }
            }
        }

        return false;
    }

    return isMatch(pattern, str, {}, {});
}

// Example usage:
console.log(wordPatternMatch("abab", "redblueredblue")); // Output: true
console.log(wordPatternMatch("aaaa", "asdasdasdasd"));   // Output: true
console.log(wordPatternMatch("aabb", "xyzabcxzyabc"));   // Output: false