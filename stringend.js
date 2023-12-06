function confirmEnding(str, tar) {
    //str.length =7 //index = 6 
    //tar.length = 2  // index = 4

    const end = str.length - 1
    const ind = str.length - tar.length

    const lastwords = str.substr(ind, end)

    console.log({ lastwords })

    if (lastwords === tar) {
        return true
    }
    return false
}

console.log(confirmEnding("Bastian", "n"))