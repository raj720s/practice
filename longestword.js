//Find the Longest Word in a String
// Return the length of the longest word in the provided sentence.
// Your response should be a number.

/**
 * findLongestWordLength("The quick brown fox jumped over the lazy dog") should return 6.
 * 
 * 1> separate all words 
 * let max =0;
 * foreach word change max = word.length 
 * if wrd.length > max then max = word
 */



function findLongestWordLength(str) {
    const words = str.split(' ')
    let max = 0
    let wrd
    for (const word of words) {
        if (word.length > max) {
            max = word.length
            wrd = word
        }
    }
    console.log(wrd)

    return max
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"))