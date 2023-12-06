/**
 * Return Largest Numbers in Arrays
 * largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]) should return [27, 5, 39, 1001].
 */

function largestOfFour(arr) {
    let numbers = []
    for (let array of arr) {
        // console.log({ array })
        let max = Number.NEGATIVE_INFINITY
        for (let i = 0; i < array.length; i++) {
            if (array[i] > max) {
                max = (array[i])
            }

        }
        // console.log({ max })
        numbers.push(max)
    }
    return console.log(numbers)
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]);