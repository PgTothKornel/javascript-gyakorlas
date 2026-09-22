function parosak(t) {
    const tomb = []

    for (item of t) {
        if (Number(item) % 2 === 0) {
            tomb.push(item)
        }
    }
    return tomb;
}

console.log(parosak([12,2,3,4,5,6,7,11,12]))