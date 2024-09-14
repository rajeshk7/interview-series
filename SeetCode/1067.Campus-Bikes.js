/*
On a campus represented on the X-Y plane, there are n workers and m bikes, with n <= m.
You are given an array workers of length n where workers[i] = [xi, yi] is the position of the ith worker. You are also given an array bikes of length m where bikes[j] = [xj, yj] is the position of the jth bike. 
All the given positions are unique.
Assign a bike to each worker. Among the available bikes and workers, we choose the (workeri, bikej) pair with the shortest Manhattan distance between each other and assign the bike to that worker.
If there are multiple (workeri, bikej) pairs with the same shortest Manhattan distance, we choose the pair with the smallest worker index. If there are multiple ways to do that, we choose the pair with the smallest bike index. 
Repeat this process until there are no available workers.
Return an array answer of length n, where answer[i] is the index (0-indexed) of the bike that the ith worker is assigned to.
The Manhattan distance between two points p1 and p2 is Manhattan(p1, p2) = |p1.x - p2.x| + |p1.y - p2.y|.

    Example 1:

    Input: workers = [[0,0],[2,1]], bikes = [[1,2],[3,3]]
    Output: [1,0]
    Explanation: Worker 1 grabs Bike 0 as they are closest (without ties), and Worker 0 is assigned Bike 1. So the output is [1, 0].

    Example 2:

    Input: workers = [[0,0],[1,1],[2,0]], bikes = [[1,0],[2,2],[2,1]]
    Output: [0,2,1]
    Explanation: Worker 0 grabs Bike 0 at first. Worker 1 and Worker 2 share the same distance to Bike 2, thus Worker 1 is assigned to Bike 2, and Worker 2 will take Bike 1. So the output is [0,2,1].
    
*/

function assignBikes(workers, bikes) {
    const n = workers.length, m = bikes.length, store = []

    for( let i = 0 ; i < n ; i++ )
      for( let j = 0 ; j < m ; j++ )
        store.push([Math.abs(workers[i][0] - bikes[j][0]) + Math.abs(workers[i][1] - bikes[j][1]), i, j]);

    store.sort((a, b) => {
      if(a[0] !== b[0])
        return a[0] - b[0]
      if (a[1] !== b[1])
            return a[1] - b[1];
      return a[2] - b[2];
    })

    const worvis = new Array(n).fill(false), bivis = new Array(m).fill(false), res = new Array(n)

    for(const [_dist, i, j] of store)  {
      if(!worvis[i] && !bivis[j]) {
        worvis[i] = bivis[j] = true
        res[i] = j
      }
    }

    return res
}

const workers1 = [[0,0],[1,1],[2,0]], bikes1 = [[1,0],[2,2],[2,1]]
console.log(assignBikes(workers1, bikes1)) // [0, 2, 1]

const workers2 = [[0,0],[2,1]], bikes2 = [[1,2],[3,3]]
console.log(assignBikes(workers2, bikes2)) // [1, 0]