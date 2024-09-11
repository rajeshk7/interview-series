/*
Given a binary tree, find the length of the longest consecutive sequence path.

    The path refers to any sequence of nodes from some starting node to any node in the tree along the parent-child connections. The longest consecutive path need to be from parent to child (cannot be the reverse).

    Example 1:

    Input:

       1
        \
         3
        / \
       2   4
            \
             5

    Output: 3

    Explanation: Longest consecutive sequence path is 3-4-5, so return 3.
    Example 2:

    Input:

       2
        \
         3
        /
       2
      /
     1

    Output: 2

    Explanation: Longest consecutive sequence path is 2-3, not 3-2-1, so return 2.
*/

class Node  {
    constructor(item)    {
        this.val = item;
        this.left = this.right = null;
    }
}

const longestConsecutive = (root, val) => {
  if(!root)
    return 0

  let retVal = (val+1 == root.val) ? 1 : 0

  retVal +=  Math.max(longestConsecutive(root.left, root.val), longestConsecutive(root.right, root.val))

  console.log(root.val +  " " + retVal)
  return retVal
}

root = new Node(6);
root.right = new Node(9);
root.right.left = new Node(7);
root.right.right = new Node(10);
root.right.right.right = new Node(11);

console.log(longestConsecutive(root, root.val)+1);

// Example 1
let root1 = new Node(1);
root1.right = new Node(3);
root1.right.left = new Node(2);
root1.right.right = new Node(4);
root1.right.right.right = new Node(5);
console.log(longestConsecutive(root1)+1); // Output: 3

// Example 2
let root2 = new Node(2);
root2.right = new Node(3);
root2.right.left = new Node(2);
root2.right.left.left = new Node(1);
console.log(longestConsecutive(root2)+1); // Output: 2