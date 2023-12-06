// remove duplicate array from a array

function purify(arr) {
    const seen = {}
    const pure = []
    for (let a = 0; a < arr.length; a++) {
        if (!seen[arr[a]]) {
            pure.push(arr[a])
            seen[arr[a]] = true
        }
    }
    return pure
}

const arrWithDuplicates = [1, 2, 2, 3, 4, 4, 5];
console.log(purify(arrWithDuplicates))
