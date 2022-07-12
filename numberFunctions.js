

const getLargest = (a, b, c) => {
    if (a && b && c) {
        return Math.max(a, b, c)
    } else {
        throw "Error: bad input."
    }
    

}

const getSmallest = (a, b, c) => {
    return Math.min(a, b, c)
}

console.log(getLargest(...[1, 2, 3]))
console.log(getSmallest(...[1, 2, 3]))


module.exports = {
    getLargest: getLargest,
    getSmallest: getSmallest
}
