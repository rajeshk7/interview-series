/*

A group of two or more people wants to meet and minimize the total travel distance. You are given a 2D grid of values 0 or 1, where each 1 marks the home of someone in the group. The distance is calculated using Manhattan Distance, where distance(p1, p2) = |p2.x - p1.x| + |p2.y - p1.y|.

Example:

Input:

1 - 0 - 0 - 0 - 1
|   |   |   |   |
0 - 0 - 0 - 0 - 0
|   |   |   |   |
0 - 0 - 1 - 0 - 0

Output: 6

Explanation: Given three people living at (0,0), (0,4), and (2,2):
             The point (0,2) is an ideal meeting point, as the total travel distance
             of 2+2+2=6 is minimal. So return 6.
*/

// Method to find the minimum total distance to a meeting point
const minTotalDistance = (grid) => {
    const m = grid.length, n = grid[0].length;
    const rows = [], cols = [];

    // Collect the row and column indices of all the 1s in the grid
    for (let i = 0; i < m; ++i) 
        for (let j = 0; j < n; ++j) 
            if (grid[i][j] === 1) {
                rows.push(i);
                cols.push(j);
            }

    // Sort the row and column indices
    rows.sort((a, b) => a - b);
    cols.sort((a, b) => a - b);

    // Find the median of the row and column indices
    const medianRow = rows[Math.floor(rows.length / 2)];
    const medianCol = cols[Math.floor(cols.length / 2)];

    // Calculate the total distance to the median row and column
    return calculateDistance(rows, medianRow) + calculateDistance(cols, medianCol);
}

// Helper method to calculate the total distance to a given point
const calculateDistance = (arr, x) => {
    let sum = 0;
    for (const v of arr) {
        sum += Math.abs(v - x);
    }
    return sum;
}

// Example usage
const grid = [
    [1, 0, 0, 0, 1],
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0]
];
console.log(minTotalDistance(grid)); // Output: 6