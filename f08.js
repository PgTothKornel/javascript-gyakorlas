function szamjegyOsszeg(n) {
    //let temp = 0;
    /*for (szamjegy of String(n)) {
        temp += Number(szamjegy)
    }*/
    let ossz = 0;
    let szam = n;
    while (szam > 0) {
        ossz += szam % 10;
        szam = Math.floor(szam / 10)
    }

    return ossz;
}

console.log(szamjegyOsszeg(4721));
console.log(szamjegyOsszeg(100));
console.log(szamjegyOsszeg(999));
console.log(szamjegyOsszeg(000));
console.log(szamjegyOsszeg(155));