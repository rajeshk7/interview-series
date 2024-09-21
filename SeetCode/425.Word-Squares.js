/*
Given a set of words (without duplicates), find all word squares you can build from them.
A sequence of words forms a valid word square if the kth row and column read the exact same string, 
where 0 ≤ k < max(numRows, numColumns).

For example, the word sequence ["ball","area","lead","lady"] forms a word square because each word reads the same both horizontally and vertically.

    b a l l
    a r e a
    l e a d
    l a d y

Note:

There are at least 1 and at most 1000 words.
All words will have the exact same length.
Word length is at least 1 and at most 5.
Each word contains only lowercase English alphabet a-z.
Example 1:

Input:
        ["area","lead","wall","lady","ball"]

        Output:
        [
        [ "wall",
            "area",
            "lead",
            "lady"
        ],
        [ "ball",
            "area",
            "lead",
            "lady"
        ]
        ]

        Explanation:
        The output consists of two word squares. 
        The order of output does not matter (just the order of words in each word square matters).
        
        Example 2:

        Input:
        ["abat","baba","atan","atal"]

        Output:
        [
        [ "baba",
            "abat",
            "baba",
            "atan"
        ],
        [ "baba",
            "abat",
            "baba",
            "atal"
        ]
        ]

        Explanation:
        The output consists of two word squares. 
        The order of output does not matter (just the order of words in each word square matters).
*/

function wordSquares(words) {
    const n = words[0].length, results = []
    const prefixMap = buildPrefixMap(words);

    function buildPrefixMap(words) {
        const map = {};
        for (const word of words) {
            for (let i = 0; i < word.length; i++) {
                const prefix = word.substring(0, i + 1);
                if (!map[prefix]) {
                    map[prefix] = [];
                }
                map[prefix].push(word);
            }
        }
        return map;
    }

    function backtrack(step, wordSquare) {
        if (step === n) {
            results.push([...wordSquare]);
            return;
        }

        const prefix = wordSquare.map(word => word[step]).join('');
        const candidates = prefixMap[prefix] || [];
        for (const candidate of candidates) {
            wordSquare.push(candidate);
            backtrack(step + 1, wordSquare);
            wordSquare.pop();
        }
    }

    for (const word of words) {
        backtrack(1, [word]);
    }

    return results;
}

// Example 1
console.log(wordSquares(["area", "lead", "wall", "lady", "ball"]));
// Output: [
//   ["wall", "area", "lead", "lady"],
//   ["ball", "area", "lead", "lady"]
// ]

// Example 2
console.log(wordSquares(["abat", "baba", "atan", "atal"]));
// Output: [
//   ["baba", "abat", "baba", "atan"],
//   ["baba", "abat", "baba", "atal"]
// ]