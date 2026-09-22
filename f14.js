function egyediek(t) {
    const tomb = [];

    for (item of t) {
        if (!tomb.includes(item)) tomb.push(item)
    }

    return tomb
}

console.log(egyediek([1,3,2,1,4,1,5,6,6]))