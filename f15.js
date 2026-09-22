function rendez(t) {
    const minta = t
    const tomb = minta.slice()

    for (let i = 0; i < tomb.length; i++) {
        for (let j = i; j < tomb.length; j++) {
            if (tomb[j] < tomb[i]) {
                let tmp = tomb[j];
                tomb[j] = tomb[i];
                tomb[i] = tmp;
            }
        }
    }
    return tomb;
}

console.log(rendez([1,2,1,5,7,1,5,2,5,3]))