/*  
    Given a string, we need to print all possible palindromes that can be generated using letters of that string. Examples:

    Input:  str = "aabcb"
    Output: abcba bacab

    Input:  str = "aabbcadad"
    Output: aabdcdbaa aadbcbdaa abadcdaba
            abdacadba adabcbada adbacabda
            baadcdaab badacadab bdaacaadb
            daabcbaad dabacabad dbaacaabd

*/

function generatePalindromes(str) {
    const result = [], charCount = new Map();

    // Count the frequency of each character
    for (const char of str) 
        charCount.set(char, (charCount.get(char) || 0) + 1);

    let oddChar = '', halfStr = '';

    // Check for more than one odd character count
    for (const [char, count] of charCount) {
        if (count % 2 !== 0) {
            if (oddChar) 
                return []; // More than one odd character, no palindrome possible
            oddChar = char;
        }
        halfStr += char.repeat(Math.floor(count / 2));
    }
    
    // Generate all permutations of halfStr
    const permutations = new Set();
    permute(halfStr.split(''), 0, permutations);

    // Form palindromes from permutations
    for (const perm of permutations) 
        result.push(perm + oddChar + perm.split('').reverse().join(''));

    return result;
}

function permute(arr, l, result) {
    if (l === arr.length) {
        result.add(arr.slice().join(''));
    } else {
        for (let i = l; i < arr.length; i++) {
            [arr[l], arr[i]] = [arr[i], arr[l]];
            permute(arr, l + 1, result);
            [arr[l], arr[i]] = [arr[i], arr[l]]; // backtrack
        }
    }
}

// Example usage:
const str1 = "aabcb";
console.log(generatePalindromes(str1)); // Output: [ 'abcba', 'bacab' ]

const str2 = "aabbcadad";
console.log(generatePalindromes(str2)); 
// Output: [ 'aabdcdbaa', 'aadbcbdaa', 'abadcdaba', 'abdacadba', 'adabcbada', 'adbacabda', 'baadcdaab', 'badacadab', 'bdaacaadb', 'daabcbaad', 'dabacabad', 'dbaacaabd' ]