/*
Given an integer n, return all the strobogrammatic numbers that are of length n. 
You may return the answer in any order.
A strobogrammatic number is a number that looks the same when rotated 180 degrees (looked at upside down).

    Example 1:
    Input: n = 2
    Output: ["11","69","88","96"]

    Example 2:
    Input: n = 1
    Output: ["0","1","8"]
*/

const strobogrammaticNumberII = (n) => {
    const arr = [[0,0], [1,1], [6,9], [8,8], [9,6]], res = []

    const generate = (str, num) => {
        if(num == 0) {
            if(str[0] != "0" || str.length == 1)
                res.push(str.split("").join(""))
            return
        }

        for (const [left, right] of arr) {
            generate(left + str + right, num - 2);
        }
    }

    if(n % 2 == 1)  {
        generate("1", n-1)
        generate("8", n-1)
        generate("0", n-1)
    }
    else
        generate("", n)

    return res
}

console.log(strobogrammaticNumberII(1)) 
console.log(strobogrammaticNumberII(2)) // [ "11", "69", "88", "96" ]
console.log(strobogrammaticNumberII(3)) 
console.log(strobogrammaticNumberII(4)) // [ "1111", "1691", "1881", "1961", "1001", "6009", "8008", "9006", "1118", "1698", "1888", "1968", "1008", "6006", "8008", "9006", "1119", "1699", "1889", "1969", "1009", "6006", "8008", "9006" ]
console.log(strobogrammaticNumberII(5)) 
