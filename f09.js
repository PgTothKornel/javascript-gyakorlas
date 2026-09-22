function tokeletes(n) {
    let ossz = 0;
    let tmp = n - 1;

    while (tmp > 0) {
        if (n % tmp === 0) {ossz += tmp; /*console.log(tmp)*/}
        tmp--;
    }

    return n === ossz;
}

for (let i = 0; i <= 100; i++) {
    console.log(i + " tökéletes szám:  " + tokeletes(i))    
}
/*
console.log(tokeletes(6));
console.log(tokeletes(10));
console.log(tokeletes(12));
console.log(tokeletes(25));
console.log(tokeletes(30));*/