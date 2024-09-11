/*
Design an algorithm to encode a list of strings to a string. The encoded string is then sent over the network and is decoded back to the original list of strings.

  Machine 1 (sender) has the function:

  string encode(vector<string> strs) {
    // ... your code
    return encoded_string;
  }
  Machine 2 (receiver) has the function:

  vector<string> decode(string s) {
    //... your code
    return strs;
  }
*/

const encode = (strs) => {
  return strs.map(str => `${str.length}#${str}`).join('');
}

const decode = (s) => {
  let i = 0;
  const result = [];

  while (i < s.length) {
    let j = i;
    while (s[j] !== '#') {
      j++;
    }
    const length = parseInt(s.slice(i, j));
    result.push(s.slice(j + 1, j + 1 + length));
    i = j + 1 + length;
  }

  return result;
}

// Example usage
const dummyInput1 = ["Hello", "World"];
const dummyInput2 = ["Rajesh", "Kumar", "is", "he", "a", "good", "sir"];

const encoded = encode(dummyInput2);
console.log("Encoded: " + encoded);

const decoded = decode(encoded);
console.log("Decoded: " + decoded);
