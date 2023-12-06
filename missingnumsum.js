/**Given an array containing n distinct numbers taken from the range 0 to n, find the missing Number
 * 
 * const arr = [0, 1, 3, 4];
const missingNumber = findMissingNumber(arr);
console.log('The missing number is:', 2);
 * 
 */

function findmissing(arr) {
    let n = arr.length
    const expectedsumm = (n * (n + 1)) / 2
    console.log({ expectedsumm })
    let total = 0
    for (let nums of arr) {
        total += nums
    }
    const missing = expectedsumm - total
    return missing
}

console.log(findmissing([0, 2, 3, 4]))