/*

Given a 2D grid, each cell is either a wall 'W', an enemy 'E' or empty '0' (the number zero), 
return the maximum enemies you can kill using one bomb.
The bomb kills all the enemies in the same row and column from the planted
point until it hits the wall since the wall is too strong to be destroyed.
Note: You can only put the bomb at an empty cell.

    Example:

        Input: [["0","E","0","0"],["E","0","W","E"],["0","E","0","0"]]
        Output: 3
        Explanation: For the given grid,

        0 E 0 0
        E 0 W E
        0 E 0 0

Placing a bomb at (1,1) kills 3 enemies.
*/

function maxKilledEnemies(grid) {
    if (!grid || grid.length === 0 || grid[0].length === 0) 
        return 0;

    let maxEnemies = 0;
    const rows = grid.length, cols = grid[0].length;
    let rowHits = 0, colHits = new Array(cols).fill(0);

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            // Calculate row hits
            // If the current cell is at the start of a row or the previous cell is a wall, it resets rowHits to 0.
            // It then counts the number of enemies in the current row from the current position until it hits a wall.
            if (j === 0 || grid[i][j - 1] === 'W') {
                rowHits = 0;
                for (let k = j; k < cols && grid[i][k] !== 'W'; k++) {
                    if (grid[i][k] === 'E') 
                        rowHits++;
                }
            }

            // Calculate column hits
            // If the current cell is at the start of a column or the cell above is a wall, it resets colHits[j] to 0.
            // It then counts the number of enemies in the current column from the current position until it hits a wall.
            if (i === 0 || grid[i - 1][j] === 'W') {
                colHits[j] = 0;
                for (let k = i; k < rows && grid[k][j] !== 'W'; k++) {
                    if (grid[k][j] === 'E') 
                        colHits[j]++;
                }
            }

            // Calculate maximum enemies killed by placing bomb at (i, j)
            // If the current cell is empty ('0'), it calculates the total number of enemies that can be killed by placing a bomb at that cell.
            // It updates maxEnemies if the current position results in more enemies killed than previously recorded.
            if (grid[i][j] === '0') {
                maxEnemies = Math.max(maxEnemies, rowHits + colHits[j]);
            }
        }
    }

    return maxEnemies;
}

// Example usage:
const grid = [
    ["0", "E", "0", "0"],
    ["E", "0", "W", "E"],
    ["0", "E", "0", "0"]
];
console.log(maxKilledEnemies(grid)); // Output: 3