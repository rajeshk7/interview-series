/*
    A 2d grid map of m rows and n columns is initially filled with water. 
    We may perform an addLand operation which turns the water at position (row, col) into a land. 
    Given a list of positions to operate, count the number of islands after each addLand operation. 
    An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. 
    You may assume all four edges of the grid are all surrounded by water.

    Example:

    Input: m = 3, n = 3, positions = [[0,0], [0,1], [1,2], [2,1]]
    Output: [1,1,2,3]

*/

class UnionFind {
    constructor(size) {
        this.parent = Array(size).fill(-1);
        this.rank = Array(size).fill(0);
        this.count = 0;
    }

    find(x) {
        if (this.parent[x] !== x) {
            this.parent[x] = this.find(this.parent[x]); // Path compression
        }
        return this.parent[x];
    }

    union(x, y) {
        const rootX = this.find(x);
        const rootY = this.find(y);

        if (rootX !== rootY) {
            if (this.rank[rootX] > this.rank[rootY]) {
                this.parent[rootY] = rootX;
            } else if (this.rank[rootX] < this.rank[rootY]) {
                this.parent[rootX] = rootY;
            } else {
                this.parent[rootY] = rootX;
                this.rank[rootX] += 1;
            }
            this.count--;
        }
    }

    addLand(x) {
        if (this.parent[x] === -1) {
            this.parent[x] = x;
            this.count++;
        }
    }

    getCount() {
        return this.count;
    }
}

function numIslands2(m, n, positions) {
    const uf = new UnionFind(m * n), result = []
    const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    const grid = Array.from({ length: m }, () => Array(n).fill(0));

    for (const [row, col] of positions) {
        const index = row * n + col;
        // Handle the case where the same position is added more than once.
        if (grid[row][col] === 1) {
            result.push(uf.getCount());
            continue;
        }

        grid[row][col] = 1;
        uf.addLand(index);

        for (const [dx, dy] of directions) {
            const newRow = row + dx, newCol = col + dy;
            const newIndex = newRow * n + newCol;

            if (newRow >= 0 && newRow < m && newCol >= 0 && newCol < n && grid[newRow][newCol] === 1) {
                uf.union(index, newIndex);
            }
        }

        result.push(uf.getCount());
    }

    return result;
}

// Example usage:
const m = 3;
const n = 3;
const positions = [[0,0], [0,1], [1,2], [2,1]];
console.log(numIslands2(m, n, positions)); // Output: [1, 1, 2, 3]