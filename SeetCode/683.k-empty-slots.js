/*
You have n bulbs in a row numbered from 1 to n. Initially, all the bulbs are turned off. We turn on exactly one bulb every day until all bulbs are on after n days.
You are given an array bulbs of length n where bulbs[i] = x means that on the (i+1)th day, we will turn on the bulb at position x where i is 0-indexed and x is 1-indexed.
Given an integer k, return the minimum day number such that there exists two turned on bulbs that have exactly k bulbs between them that are all turned off. If there isn't such day, return -1.

    Example 1:

    Input: bulbs = [1,3,2], k = 1
    Output: 2
    Explanation:
    On the first day: bulbs[0] = 1, first bulb is turned on: [1,0,0]
    On the second day: bulbs[1] = 3, third bulb is turned on: [1,0,1]
    On the third day: bulbs[2] = 2, second bulb is turned on: [1,1,1]
    We return 2 because on the second day, there were two on bulbs with one off bulb between them.

    Example 2:

    Input: bulbs = [1,2,3], k = 1
    Output: -1

*/

class BinaryIndexedTree {
  // Constructor to initialize the Fenwick Tree with size n
  constructor(n) {
    this.n = n;
    // Initialize an array of size n+1 with all elements set to 0
    this.arr = new Array(n + 1).fill(0);
  }

  // Method to update the Fenwick Tree at position x with delta
  update(x, delta) {
    // Traverse all ancestors of the node and update them
    for (; x <= this.n; x += x & -x) {
      this.arr[x] += delta;
    }
  }

  // Update: x -= x & -x - This updates x by subtracting the value of the least significant bit that is set to 1.
  query(x) {
    let sum = 0;
    for (; x > 0; x -= x & -x) {
      sum += this.arr[x];
    }
    return sum;
  }
}

const kEmptySlots = (bulbs, k) => {
  const n = bulbs.length
  const tree = new BinaryIndexedTree(n);
  const vis = new Array(n).fill(false)

  for( let i = 1 ; i <= n ; i++ )  {
    const x = bulbs[i-1]
    tree.update(x, 1)
    vis[x] = true
    let y = x - k - 1
    if(y > 0 && vis[y] && tree.query(x-1) - tree.query(y) == 0)
      return i
    y = x + k + 1
    if(y <= n && vis[y] && (tree.query(y-1) - tree.query(x) == 0))
      return i
  }

  return -1
}

const bulbs = [1,3,2], k = 1
console.log(kEmptySlots(bulbs, k)) // Expected Output: 2

const bulbs2 = [1,2,3], k2 = 1
console.log(kEmptySlots(bulbs2, k2)) // Expected Output: -1