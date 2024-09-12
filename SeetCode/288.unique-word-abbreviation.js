/**
 * An abbreviation of a word follows the form <first letter><number><last letter>. Below are some examples of word abbreviations:

    a) it                      --> it    (no abbreviation)

        1
        ↓
    b) d|o|g                   --> d1g

                  1    1  1
        1---5----0----5--8
        ↓   ↓    ↓    ↓  ↓
    c) i|nternationalizatio|n  --> i18n

                  1
        1---5----0
        ↓   ↓    ↓
    d) l|ocalizatio|n          --> l10n
Assume you have a dictionary and given a word, find whether its abbreviation is unique in the dictionary. A word's abbreviation is unique if no other word from the dictionary has the same abbreviation.

  Example:

  Given dictionary = [ "deer", "door", "cake", "card" ]

  isUnique("dear") -> false
  isUnique("cart") -> true
  isUnique("cane") -> false
  isUnique("make") -> true

 */
class ValidWordAbbr {
  constructor(arr)  {
    this.dict = new Map()
    this.store = new Map()

    arr.forEach((word)  => {
        const short = this.createShort(word)
        this.dict.set(word, short)
        this.store.set(short, this.store.has(short) ? this.store.get(short) + 1 : 1)
    })
  }

  createShort = (word) => {
    if(word.length <= 2)
      return word
    const res = word.split("")
    return res[0] + String(res.length-2) + res[res.length-1]
  }

  isUnique = (word) => {
    const short = this.createShort(word)
    const count = this.store.get(short)
    return count === undefined || (count === 1 && this.dict.get(word) === short)
  }
}

const dictionary = ["deer", "door", "cake", "card"];
const wordAbbr = new ValidWordAbbr(dictionary);

console.log(wordAbbr.isUnique("dear")); // Expected Output: false
console.log(wordAbbr.isUnique("cart")); // Expected Output: true
console.log(wordAbbr.isUnique("cane")); // Expected Output: false
console.log(wordAbbr.isUnique("make")); // Expected Output: true
