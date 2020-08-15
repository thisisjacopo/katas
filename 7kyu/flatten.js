var flatten = function (array) {
    let together = [].concat.apply([], array)
    return together
    }