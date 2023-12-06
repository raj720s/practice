
function checkPalindrome(word) {
    const format = typeof (word) === 'number' ? word.toString() : word.toLowerCase()
    const reverse = format.split('').reverse().join('')
    return format === reverse
}

function breaksentence(sent) {
    const words = sent.split(' ')
    const palin = []
    for (let word of words) {
        if (checkPalindrome(word)) {
            palin.push(word)
        }
    }
    return { palindromes: palin }
}

console.log(checkPalindrome(12321))
console.log(checkPalindrome('mom'))

console.log(breaksentence('this is not Good for dood and rotor'))

// output
/*
true
true
{ palindromes: [ 'dood', 'rotor' ] }
*/