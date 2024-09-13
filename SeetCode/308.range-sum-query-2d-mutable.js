/*
Given a 2D matrix matrix, find the sum of the elements inside the rectangle defined by its upper left corner (row1, col1) and lower right corner (row2, col2).
Range Sum Query 2D
The above rectangle (with the red border) is defined by (row1, col1) = (2, 1) and (row2, col2) = (4, 3), which contains sum = 8.

        Example:
        Given matrix = [
        [3, 0, 1, 4, 2],
        [5, 6, 3, 2, 1],
        [1, 2, 0, 1, 5],
        [4, 1, 0, 1, 7],
        [1, 0, 3, 0, 5]
        ]

        sumRegion(2, 1, 4, 3) -> 8
        update(3, 2, 2)
        sumRegion(2, 1, 4, 3) -> 10
        
Note:
    The matrix is only modifiable by the update function.
    You may assume the number of calls to update and sumRegion function is distributed evenly.
    You may assume that row1 ≤ row2 and col1 ≤ col2.
*/
class FenwickTree {
    constructor(m, n) {
        this.sums = new Array(m+1).fill().map(() => new Array(n+1).fill(0))
    }

    add(row, col, delta) {
        for (let i = row; i < this.sums.length; i += i & -i) 
            for (let j = col; j < this.sums[0].length; j += j & -j) 
                this.sums[i][j] += delta;
    }

    get(row, col) {
        let sum = 0;
        for (let i = row; i > 0; i -= i & -i) 
            for (let j = col; j > 0; j -= j & -j) 
                sum += this.sums[i][j];

        return sum;
    }
}

class NumMatrix {
    constructor(matrix) {
        this.matrix = matrix;
        this.tree = new FenwickTree(matrix.length, matrix[0].length);
        for (let i = 0; i < matrix.length; ++i) 
            for (let j = 0; j < matrix[0].length; ++j) 
                this.tree.add(i + 1, j + 1, matrix[i][j]);

    }

    update(row, col, val) {
        this.tree.add(row + 1, col + 1, val - this.matrix[row][col]);
        this.matrix[row][col] = val;
    }

    sumRegion(row1, col1, row2, col2) {
        return this.tree.get(row2 + 1, col2 + 1) - this.tree.get(row1, col2 + 1) -
               this.tree.get(row2 + 1, col1) + this.tree.get(row1, col1);
    }
} 

const matrix = [
    [3, 0, 1, 4, 2],
    [5, 6, 3, 2, 1],
    [1, 2, 0, 1, 5],
    [4, 1, 0, 1, 7],
    [1, 0, 3, 0, 5]
  ]

const numMatrix = new NumMatrix(matrix);
console.log( numMatrix.sumRegion(2, 1, 4, 3) ); // returns 
numMatrix.update(3, 2, 2);
console.log( numMatrix.sumRegion(2, 1, 4, 3) );