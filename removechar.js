/**
 * 6:Q3. Remove character
For a given string(str) and a character X, write a function to remove all the occurrences of X from the given string and return it.
The input string will remain unchanged if the given character(X) doesn't exist in the input string.
 */

function restring(str, char) {
    // if str is num do str.toString()
    const letters = str.split('')
    const newstr = letters.filter(lt => lt !== char)
    const removed = newstr.join('')
    return removed
}

function removechar(str, char) {
    // if a num .. .toString()
    let word = ''
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== char) {
            word += str[i]
        }
    }
    return word
}

console.log(restring('abracadabra is amazing', 'a'))
console.log(removechar('abracadabra', 'a'))
console.log(removechar('abracadabra is amazing', 'a'))