/*
Given an Android 3x3 key lock screen and two integers m and n, where 1 ≤ m ≤ n ≤ 9, count the total number of unlock patterns of the Android lock screen, which consist of minimum of m keys and maximum n keys.

Rules for a valid pattern:

Each pattern must connect at least m keys and at most n keys.
All the keys must be distinct.
If the line connecting two consecutive keys in the pattern passes through any other keys, 
the other keys must have previously selected in the pattern. No jumps through non selected key is allowed.
The order of keys used matters.

        Explanation:

        | 1 | 2 | 3 |
        | 4 | 5 | 6 |
        | 7 | 8 | 9 |
        Invalid move: 4 - 1 - 3 - 6
        Line 1 - 3 passes through key 2 which had not been selected in the pattern.

        Invalid move: 4 - 1 - 9 - 2
        Line 1 - 9 passes through key 5 which had not been selected in the pattern.

        Valid move: 2 - 4 - 1 - 3 - 6
        Line 1 - 3 is valid because it passes through key 2, which had been selected in the pattern

        Valid move: 6 - 5 - 4 - 1 - 9 - 2
        Line 1 - 9 is valid because it passes through key 5, which had been selected in the pattern.
*/

function numberOfPatterns(m, n) {
    // Initialize a 10x10 matrix to store the crossing points
    const cross = Array(10).fill(0).map(() => Array(10).fill(0));
    // Initialize a visited array to keep track of visited numbers
    const vis = Array(10).fill(false);

    // Define the crossing points
    cross[1][3] = cross[3][1] = 2;
    cross[1][7] = cross[7][1] = 4;
    cross[1][9] = cross[9][1] = 5;
    cross[2][8] = cross[8][2] = 5;
    cross[3][7] = cross[7][3] = 5;
    cross[3][9] = cross[9][3] = 6;
    cross[4][6] = cross[6][4] = 5;
    cross[7][9] = cross[9][7] = 8;

    // Depth-first search function to count valid patterns
    const dfs = (i, cnt) => {
        // If the count exceeds n, return 0
        if (cnt > n) 
            return 0;

        // Mark the current number as visited
        vis[i] = true;
        let ans = 0;

        // If the count is within the range [m, n], increment the answer
        if (cnt >= m) {
            ++ans;
        }

        // Try all possible next numbers
        for (let j = 1; j < 10; ++j) {
            const x = cross[i][j];
            // If the next number is not visited and either there is no crossing point or the crossing point is visited
            if (!vis[j] && (x === 0 || vis[x])) {
                ans += dfs(j, cnt + 1);
            }
        }

        // Backtrack: unmark the current number as visited
        vis[i] = false;
        return ans;
    };

    // Start DFS from 1, 2, and 5 and multiply by 4 for symmetry
    return dfs(1, 1) * 4 + dfs(2, 1) * 4 + dfs(5, 1);
}

// Example usage
console.log(numberOfPatterns(1, 1)); // Output: 9
console.log(numberOfPatterns(1, 2)); // Output: 65
console.log(numberOfPatterns(1, 3)); // Output: 385