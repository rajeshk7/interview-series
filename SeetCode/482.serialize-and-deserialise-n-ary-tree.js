/*
Serialization is the process of converting a data structure or object into a sequence of bits so that it can be stored in a file or memory buffer, 
or transmitted across a network connection link to be reconstructed later in the same or another computer environment.

Design an algorithm to serialize and deserialize an N-ary tree. An N-ary tree is a rooted tree in which each node has no more than N children. 
There is no restriction on how your serialization/deserialization algorithm should work. You just need to ensure that an N-ary tree can be serialized to a string and this string can be deserialized to the original tree structure.

For example, you may serialize the following 3-ary tree
as [1 [3[5 6] 2 4]]. You do not necessarily need to follow this format, so please be creative and come up with different approaches yourself.

Note:

N is in the range of [1, 1000]
Do not use class member/global/static variables to store states. Your serialize and deserialize algorithms should be stateless.
*/

class Node {
    constructor(val, children = []) {
        this.val = val;
        this.children = children;
    }
}

const serialize = (root) => {
    let str = ""

    const process = (node) => {
        if(!node)
            return 
        
        str += node.val
        for( const child of node.children )
            process(child)

        str += ")"
    }

    process(root)
    return str
};

const deserialize = (serialized) => {
    const values = serialized.split("");
    let index = 0;

    const buildTree = () => {
        const value = values[index++]
        if(!value || value == ")")
            return null

        const node = new Node(value)

        while(true) {
            const child = buildTree()
            if(!child)
                break
            node.children.push(child)
        }

        return node
    }

    return buildTree()
};

// Example usage:
const root = new Node(1, [
    new Node(3, [new Node(5), new Node(6)]),
    new Node(2),
    new Node(4)
]);

const root2 = new Node('A');
root2.children = [ new Node('B'),  new Node('C'),  new Node('D')];
root2.children[0].children = [ new Node('E'),  new Node('F')];
root2.children[2].children = [ new Node('G'),  new Node('H'),  new Node('I'),  new Node('J')];
root2.children[0].children[1].children = [ new Node('K')];

const serialized = serialize(root);
console.log(serialized)
console.log(serialize(deserialize(serialize(root)))); // Output: "1[3[5 6]2 4]"

// const deserialized = deserialize(serialized);
// console.log(deserialized); // Output: Node { val: 1, children: [ Node { val: 3, children: [Array] }, Node { val: 2, children: [] }, Node { val: 4, children: [] } ] }

const serialized2 = serialize(root2);
console.log(serialized2)
console.log(serialize(deserialize(serialize(root2)))); // Output: "1[3[5 6]2 4]"
// const deserialized2 = deserialize(serialized2);
// console.log(deserialized2); // Output: Node { val: 'A', children: [ Node { val: 'B', children: [Array] }, Node { val: 'C', children: [Array] }, Node { val: 'D', children: [Array] } ] }