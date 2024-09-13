/*
Given a sorted integer array nums, where the range of elements are in the inclusive range [lower, upper], return its missing ranges.

    Example:

    Input: nums = [0, 1, 3, 50, 75], lower = 0 and upper = 99,
    Output: ["2", "4->49", "51->74", "76->99"]
*/

const finder = (nums, lower, upper) => {
    let cur = lower, res = [];

    if(lower == upper)  {
        return lower == nums[0] ? [] : [`${lower}`]
    }

    for( let i = 0 ; i < nums.length ; i++ )    {
        if(nums[i] == cur)
            cur++
        else    {
            let next = nums[i]
            if(cur == next - 1)
                res.push(String(cur))
            else
                res.push(`${cur}->${next-1}`)
            cur = next+1
        }
    }
    
    if(cur == upper)
        res.push(String(cur))
    else
        res.push(`${cur}->${upper}`)

    console.log("Result " + res)
    return res
}

const nums = [0, 1, 3, 50, 75], lower = 0, upper = 99
console.log(finder( nums, lower, upper )) // ["2", "4->49", "51->74", "76->99"]
