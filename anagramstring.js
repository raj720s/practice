
/**
 * To determine if two strings are anagrams of each other, you need to check if the characters in both strings can be rearranged to form the other string. One way to do this is by comparing the character counts in both strings. If the character counts for each character are the same, the strings are anagrams.
 */


function checkanagram(str1, str2) {
    if (str1.length !== str2.length) {
        return false
    }
    const st1 = str1.split('').sort().join('')
    const st2 = str2.split('').sort().join('')
    if (st1 == st2) {
        return true
    }
    return false
}
const str1 = "todo";
const str2 = "doot";
console.log(checkanagram(str1, str2));
function reverseString(str) {
    return str.split('').reverse().join('');
}

// Example usage for reversing a string
const originalString = 'hello';
const reversedString = reverseString(originalString);
console.log('Reversed string:', reversedString);