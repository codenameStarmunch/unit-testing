const getLargest = (a, b, c) => {
    return Math.max(a, b, c)
}

const getSmallest = (a, b, c) => {
    return Math.min(a, b, c)
}

console.log(getLargest(...[1, 2, 3]))


module.exports = numberFunctions;