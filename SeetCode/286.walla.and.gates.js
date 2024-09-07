/*
    -1 - A wall or an obstacle.
    0 - A gate.
    INF - Infinity means an empty room. 
We use the value 231 - 1 = 2147483647 to represent INF as you may assume that the distance to a gate is less than 2147483647.
Fill each empty room with the distance to its nearest gate. If it is impossible to reach a gate, it should be filled with INF.

    Example: 

    Given the 2D grid:

    INF  -1  0  INF
    INF INF INF  -1
    INF  -1 INF  -1
    0  -1 INF INF
    After running your function, the 2D grid should be:

    3  -1   0   1
    2   2   1  -1
    1  -1   2  -1
    0  -1   3   4

    Example 2

    INF  -1  0  INF
    INF  -1  INF  -1
    INF  -1  INF  -1
    0  -1  INF  INF

    3  -1   0   1
    2  -1   1  -1
    1  -1   2  -1
    0  -1   3   4

*/

const populateGate = (box) => {

    const cord = [[0, 1], [0, -1], [1, 0], [-1, 0]]
    const isValid = (x, y) => x >= 0 && x < box.length && y >= 0 && y < box[0].length && box[x][y] === Infinity
    let count = 0, shouldContinue = true

    const iterate = (i, j, count) => {

        for( const [x, y] of cord) {
            const dx = i+x, dy = j+y
            if(isValid(dx, dy) && box[dx][dy] === Infinity) {
                box[dx][dy] = count+1
                iterate(dx, dy, count+1)
            }
        }
    }

    while(shouldContinue) {
        shouldContinue = false
        for(let i=0; i<box.length; i++) {
            for(let j=0; j<box[0].length; j++) {
                if(box[i][j] === count) {
                    shouldContinue = true
                    iterate(i, j, count)
                }
            }
        }
        count++
    }

    return box

}

const box = [
    [Infinity, -1, 0, Infinity],
    [Infinity, -1, Infinity, -1],
    [Infinity, -1, Infinity, -1],
    [0, -1, Infinity, Infinity]
]

console.log(populateGate(box))
