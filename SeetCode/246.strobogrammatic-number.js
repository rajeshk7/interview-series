/*
Given a string num which represents an integer, return true if num is a strobogrammatic number.
A strobogrammatic number is a number that looks the same when rotated 180 degrees (looked at upside down).

    Example 1:
    Input: num = "69"
    Output: true

    Example 2:
    Input: num = "88"
    Output: true

    Example 3:
    Input: num = "962"
    Output: false
*/

const strobogrammaticNumber = (num) => {
    const map = {"0":"0", "1":"1", "6":"9", "8":"8", "9":"6"};
    const str = num.toString();
    let left = 0, right = str.length-1;

    while(left <= right) {
        if(map[str[left++]] !== str[right--]) 
            return false;
    }

    return true;
}

console.log(strobogrammaticNumber(69)); // true
console.log(strobogrammaticNumber(88)); // true
console.log(strobogrammaticNumber(818)); // true
console.log(strobogrammaticNumber(8188)); // false
console.log(strobogrammaticNumber(81818)); // true
console.log(strobogrammaticNumber(818188)); // false
console.log(strobogrammaticNumber(8181818)); // true