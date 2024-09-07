/*
There is a new alien language which uses the latin alphabet. However, the order among letters are unknown to you. You receive a list of non-empty words from the dictionary, where words are sorted lexicographically by the rules of this new language. Derive the order of letters in this language.

Example 1:

        Input:
        [
        "wrt",
        "wrf",
        "er",
        "ett",
        "rftt"
        ]

        Output: "wertf"
        Example 2:

        Input:
        [
        "z",
        "x"
        ]

        Output: "zx"
        Example 3:

        Input:
        [
        "z",
        "x",
        "z"
        ]

        Output: "" 

Explanation: The order is invalid, so return "".
*/

function alienOrder(words) {
    const adjList = new Map(), inDegree = new Map();

    // Initialize the graph
    for (const word of words) {
        for (const char of word) {
            if (!adjList.has(char)) {
                adjList.set(char, []);
                inDegree.set(char, 0);
            }
        }
    }

    // Build the graph
    for (let i = 0; i < words.length - 1; i++) {
        const word1 = words[i], word2 = words[i + 1];
        const minLength = Math.min(word1.length, word2.length);

        // Check for invalid order
        if (word1.length > word2.length && word1.startsWith(word2)) {
            return "";
        }

        for (let j = 0; j < minLength; j++) {
            if (word1[j] !== word2[j]) {
                adjList.get(word1[j]).push(word2[j]);
                inDegree.set(word2[j], inDegree.get(word2[j]) + 1);
                break;
            }
        }
    }

    // Topological sort using Kahn's algorithm
    const queue = [];
    for (const [char, degree] of inDegree.entries()) {
        if (degree === 0) {
            queue.push(char);
        }
    }

    let order = "";
    while (queue.length > 0) {
        const char = queue.shift();
        order += char;

        for (const neighbor of adjList.get(char)) {
            inDegree.set(neighbor, inDegree.get(neighbor) - 1);
            if (inDegree.get(neighbor) === 0) {
                queue.push(neighbor);
            }
        }
    }

    // If the order contains all characters, return it; otherwise, return ""
    return order.length === inDegree.size ? order : "";
}

// Example usage:
console.log(alienOrder(["wrt", "wrf", "er", "ett", "rftt"])); // Output: "wertf"
console.log(alienOrder(["z", "x"])); // Output: "zx"
console.log(alienOrder(["z", "x", "z"])); // Output: ""