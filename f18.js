function cezar(szoveg,eltolas) {
  let sor = "";
  
  const tomb = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

  let tmp = 0;

  for (item of szoveg) {
    //console.log(tomb.indexOf(szoveg[i]) + eltolas)
    if (item === " ") {
      sor += " ";
      continue;
    }
    tmp = tomb.indexOf(item);
    tmp += eltolas;
    if (tmp > 26) { tmp = tmp % 26 }
    if (tmp < 0) {
      tmp += 26
    }
    console.log(tmp)
    sor += tomb[tmp]
    //console.log(tmp + " " + tomb[tmp])
  }

  return sor;
}

console.log(cezar("hello vilag",3))