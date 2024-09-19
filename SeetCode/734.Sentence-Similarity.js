/**
We can represent a sentence as an array of words, for example, the sentence "I am happy with leetcode" can be represented as arr = ["I","am",happy","with","leetcode"].
Given two sentences sentence1 and sentence2 each represented as a string array and given an array of string pairs similarPairs where similarPairs[i] = [xi, yi] indicates that the two words xi and yi are similar.

Return true if sentence1 and sentence2 are similar, or false if they are not similar.

Two sentences are similar if:

They have the same length (i.e., the same number of words)
sentence1[i] and sentence2[i] are similar.
Notice that a word is always similar to itself, also notice that the similarity relation is not transitive. For example, 
if the words a and b are similar, and the words b and c are similar, a and c are not necessarily similar.

    Example 1:

    Input: sentence1 = ["great","acting","skills"], sentence2 = ["fine","drama","talent"], similarPairs = [["great","fine"],["drama","acting"],["skills","talent"]]
    Output: true
    Explanation: The two sentences have the same length and each word i of sentence1 is also similar to the corresponding word in sentence2.
    Example 2:

    Input: sentence1 = ["great"], sentence2 = ["great"], similarPairs = []
    Output: true
    Explanation: A word is similar to itself.
    Example 3:

    Input: sentence1 = ["great"], sentence2 = ["doubleplus","good"], similarPairs = [["great","doubleplus"]]
    Output: false
    Explanation: As they don't have the same length, we return false.
*/

const areSentencesSimilar = (sentence1, sentence2, similarPairs) => {
    // If the lengths of the sentences are not the same, they cannot be similar
    if (sentence1.length !== sentence2.length) {
        return false;
    }

    // Create a map to store the similarity pairs
    const map = new Map();
    similarPairs.forEach(pair => {
        if (!map.has(pair[0])) {
            map.set(pair[0], new Set());
        }
        if (!map.has(pair[1])) {
            map.set(pair[1], new Set());
        }
        map.get(pair[0]).add(pair[1]);
        map.get(pair[1]).add(pair[0]);
    });

    // Check each word in the sentences
    for (let i = 0; i < sentence1.length; i++) {
        const word1 = sentence1[i], word2 = sentence2[i];

        // If the words are the same, continue
        if (word1 === word2) {
            continue;
        }
        // If the words are not the same, check if they are similar
        if (!map.has(word1) || !map.get(word1).has(word2)) {
            return false;
        }
    }

    return true;
};

// Example usage
const sentence1 = ["great", "acting", "skills"];
const sentence2 = ["fine", "drama", "talent"];
const similarPairs = [["great", "fine"], ["drama", "acting"], ["skills", "talent"]];

console.log(areSentencesSimilar(sentence1, sentence2, similarPairs)); // true

const sentence3 = ["great"];
const sentence4 = ["great"];
const similarPairs2 = [];

console.log(areSentencesSimilar(sentence3, sentence4, similarPairs2)); // true

const sentence5 = ["great"];
const sentence6 = ["doubleplus", "good"];
const similarPairs3 = [["great", "doubleplus"]];

console.log(areSentencesSimilar(sentence5, sentence6, similarPairs3)); // false

// Additional test case
const sentence7 = ["great", "acting", "skills"];
const sentence8 = ["fine", "drama", "talent"];
const similarPairs4 = [["great", "fine"], ["fine", "good"], ["drama", "acting"], ["skills", "talent"]];

console.log(areSentencesSimilar(sentence7, sentence8, similarPairs4)); // true