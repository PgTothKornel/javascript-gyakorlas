function palindrom(s) {
    let szoveg = s.replaceAll(" ","").toLowerCase()
    //szoveg.replaceAll(" ","")
    for (let i = 0; i < Math.ceil(szoveg.length / 2); i++) {
      if (szoveg[i] !== szoveg[szoveg.length - i - 1]) {
        return false
      }
    }

    return true;
}

console.log(palindrom("indula görög aludni"))
console.log(palindrom("géza kék az ég"))
console.log(palindrom("géza kékebb az ég"))