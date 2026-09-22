function jelszoEros(s) {
  if (s.length <= 8) return false;
  else if (s.toLowerCase() === s) return false;

  let tmp = false;

  for (let i = 0; i < 10; i++) {
    if (s.includes(i)) {
      tmp = true; break;
    }
  }


  return tmp;
}

console.log("abc " + jelszoEros("aaa"));
console.log("abcdefghj " + jelszoEros("abcdefghj"));
console.log("Abcdefghj " + jelszoEros("Abcdefghj"));
console.log("Abcdefghj1 " + jelszoEros("Abcdefghj1"));