// Given an array of numbers, find two numbers that add up to a specific sum.

const arr = [2, 7, 11, 15];
const targetSum = 9;
const result = findsummers(arr, targetSum);
// [2,7]

function findsummers(arr, tgt) {
    const seen = {}
    for (let i = 0; i < arr.length; i++) {
        const p2 = tgt - arr[i]
        if (seen[p2] !== undefined) {
            console.log('adjacent');
            return [arr[i], p2]
        }
        seen[arr[i]] = i
    }
    return null
}

console.log(result)