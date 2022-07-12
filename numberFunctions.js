const getLargest = (a, b, c) => {
    return Math.max(a, b, c)
}

const getSmallest = (a, b, c) => {
    return Math.min(a, b, c)
}

console.log(getLargest(...[1, 2, 3]))
console.log(getSmallest(...[1, 3, 5]))


module.exports = {
    getLargest: getLargest,
    getSmallest: getSmallest
}
