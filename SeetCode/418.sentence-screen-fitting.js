/*
Given a rows x cols screen and a sentence represented by a list of non-empty words, find how many times the given sentence can be fitted on the screen.

Note:
    A word cannot be split into two lines.
    The order of words in the sentence must remain unchanged.
    Two consecutive words in a line must be separated by a single space.
    Total words in the sentence won't exceed 100.
    Length of each word is greater than 0 and won't exceed 10.
    1 ≤ rows, cols ≤ 20,000.

  Example 1:

  Input:
  rows = 2, cols = 8, sentence = ["hello", "world"]

  Output:
  1

  Explanation:
  hello---
  world---

  The character '-' signifies an empty space on the screen.
  Example 2:

  Input:
  rows = 3, cols = 6, sentence = ["a", "bcd", "e"]

  Output:
  2

  Explanation:
  a-bcd-
  e-a---
  bcd-e-

The character '-' signifies an empty space on the screen.
*/

const wordsTyping = (arr, row, col) => {
  let count = 1, ind = 0

  for( let i = 0 ; i < row ; i++ )  {
    let j = col, spc = 0, temp = ""
    while(j > 0)  {
      if(ind == arr.length) {
        count++
        ind = 0
      }
      if(j >=  (arr[ind].length + spc)) {
        temp += " " + arr[ind] + " "
        j = j - (arr[ind++].length + spc)

        spc = 1
      }
      else
        j = -1
    }
    console.log(temp)
  }
  return count
}

const r1 = 2, c1 = 8, sen1 = ["hello", "world"]
const r2 = 3, c2 = 6, sen2 = ["a", "bcd", "e"]

console.log(wordsTyping(sen1, r1, c1))
console.log(wordsTyping(sen2, r2, c2))

const r3 = 3, c3 = 10, sen3 = ["I", "had", "apple", "pie"];
console.log(wordsTyping(sen3, r3, c3)); // Expected output: 1