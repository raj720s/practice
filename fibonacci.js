// return fibo sequence of the number

function fibonaci(num) {
    const init = [0, 1]
    for (let i = 2; i <= num; i++) {
        init[i] = init[i - 1] + init[i - 2]
    }
    return init
}

console.log(fibonaci(3))