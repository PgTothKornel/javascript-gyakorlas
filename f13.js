function masodikLegnagyobb(t) {
    let max = 0;
    let masodik = 0;

    for (item of t) {
        if (item > max) {
            masodik = max;
            max = item;
            continue;
        }
        if (item > masodik) {
            masodik = item
        }
    }

    return masodik;
}

console.log(masodikLegnagyobb([1,400,5,7,1,2,57,8]))

