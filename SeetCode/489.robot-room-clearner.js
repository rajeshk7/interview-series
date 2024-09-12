/*
Given a robot cleaner in a room modeled as a grid.
Each cell in the grid can be empty or blocked.
The robot cleaner with 4 given APIs can move forward, turn left or turn right. Each turn it made is 90 degrees.
When it tries to move into a blocked cell, its bumper sensor detects the obstacle and it stays on the current cell.
Design an algorithm to clean the entire room using only the 4 given APIs shown below.
        
    Example:

    Input:
    room = [
    [1,1,1,1,1,0,1,1],
    [1,1,1,1,1,0,1,1],
    [1,0,1,1,1,1,1,1],
    [0,0,0,1,0,0,0,0],
    [1,1,1,1,1,1,1,1]
    ],
    row = 1,
    col = 3

    Explanation:
    All grids in the room are marked by either 0 or 1.
    0 means the cell is blocked, while 1 means the cell is accessible.
    The robot initially starts at the position of row=1, col=3.
    From the top left corner, its position is one row below and three columns right.
    Notes:

The input is only given to initialize the room and the robot's position internally. You must solve this problem "blindfolded". In other words, you must control the robot using only the mentioned 4 APIs, without knowing the room layout and the initial robot's position.
The robot's initial position will always be in an accessible cell.
The initial direction of the robot will be facing up.
All accessible cells are connected, which means the all cells marked as 1 will be accessible by the robot.
Assume all four edges of the grid are all surrounded by wall.
*/

/**
 * class Robot {
 *      // Returns true if the cell in front is open and robot moves into the cell.
 *      // Returns false if the cell in front is blocked and robot stays in the current cell.
 * 		move(): boolean {}
 *
 *      // Robot will stay in the same cell after calling turnLeft/turnRight.
 *      // Each turn will be 90 degrees.
 * 		turnRight() {}
 *
 *      // Robot will stay in the same cell after calling turnLeft/turnRight.
 *      // Each turn will be 90 degrees.
 * 		turnLeft() {}
 *
 * 		// Clean the current cell.
 * 		clean(): {}
 * }
 */

class Robot {
    constructor(room, row, col) {
        this.room = room;
        this.row = row;
        this.col = col;
        this.directions = [[-1, 0], [0, 1], [1, 0], [0, -1]]; // Up, Right, Down, Left
        this.dirIndex = 0; // Initially facing up
    }

    // Returns true if the cell in front is open and robot moves into the cell.
    // Returns false if the cell in front is blocked and robot stays in the current cell.
    move() {
        const nextRow = this.row + this.directions[this.dirIndex][0];
        const nextCol = this.col + this.directions[this.dirIndex][1];
        if (nextRow >= 0 && nextRow < this.room.length && nextCol >= 0 && nextCol < this.room[0].length && this.room[nextRow][nextCol] === 1) {
            this.row = nextRow;
            this.col = nextCol;
            return true;
        }
        return false;
    }

    // Robot will stay in the same cell after calling turnLeft/turnRight.
    // Each turn will be 90 degrees.
    turnRight() {
        this.dirIndex = (this.dirIndex + 1) % 4;
    }

    // Robot will stay in the same cell after calling turnLeft/turnRight.
    // Each turn will be 90 degrees.
    turnLeft() {
        this.dirIndex = (this.dirIndex + 3) % 4;
    }

    // Clean the current cell.
    clean() {
        console.log(`Cleaning cell at (${this.row}, ${this.col})`);
    }
}

 // ------------------------------- MAIN CODE -------------------------------

 const cleanRoom = (robot) => {
    const directions = [-1, 0, 1, 0, -1], visited = new Set();

    const dfs = (row, col, direction) => {
        visited.add(`${row},${col}`);
        robot.clean();

        // Try all 4 directions
        for (let i = 0; i < 4; i++) {
            // Calculate new direction
            const newDirection = (direction + i) % 4;
            const newRow = row + directions[newDirection];
            const newCol = col + directions[newDirection + 1];

            // If the new position is not visited and the robot can move there
            if (!visited.has(`${newRow},${newCol}`) && robot.move()) {
                // Recursively clean the new position
                dfs(newRow, newCol, newDirection);
                // Move back to the previous position
                robot.turnRight();
                robot.turnRight();
                robot.move();
                robot.turnRight();
                robot.turnRight();
            }
            // Turn the robot to the right
            robot.turnRight();
        }
    };

    // Start cleaning from the initial position (0, 0) facing up (direction 0)
    dfs(0, 0, 0);
    console.log("Room cleaned");
};

// ------------------------------- END -------------------------------

// Time Complexity: O(4^(N-M)), where N is the number of cells in the room and M is the number of obstacles.

// Sample room and initial position
const room = [
    [1, 1, 1, 1, 1, 0, 1, 1],
    [1, 1, 1, 1, 1, 0, 1, 1],
    [1, 0, 1, 1, 1, 1, 1, 1],
    [0, 0, 0, 1, 0, 0, 0, 0],
    [1, 1, 1, 1, 1, 1, 1, 1]
];

const robot = new Robot(room, 1, 3);
// Run the cleanRoom function
cleanRoom(robot);