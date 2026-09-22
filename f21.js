const termek = [{
  nev: "Egér",
  nettoAr: 6990,
  keszlet: 12,
  kategoria: "meno"
},{
  nev: "billentyuzet",
  nettoAr: 10000,
  keszlet: 5,
  kategoria: "bena"
},{
  nev: "füles",
  nettoAr: 3000,
  keszlet: 22,
  kategoria: "meno"
},{
  nev: "touchpad",
  nettoAr: 12450,
  keszlet: 0,
  kategoria: "bena"
},{
  nev: "hangszoró",
  nettoAr: 99999,
  keszlet: 1,
  kategoria: "meno"
},{
  nev: "monitor",
  nettoAr: 123321,
  keszlet: 16,
  kategoria: "bena"
}];

const tomb = [];
const fajtak = []
let max = 0;
let maxNev = "";
for (item of termek) {
  if (!fajtak.includes(item.kategoria)) {
    fajtak.push(item.kategoria);
  }
  tomb.push(item.kategoria);
  if (item.nettoAr > max) {
    max = item.nettoAr;
    maxNev = item.nev;
  }
  if (item.keszlet === 0) {
    console.log("Kifogyott: " + item.nev)
  }
  else {console.log(item.nev + " " + item.nettoAr * item.keszlet + " Ft")}
}
console.log("A legdrágább termék (" + max + "Ft) neve: " + maxNev)

let tmp = 0;
for (item of fajtak) {
  tmp = 0;
  for (item1 of tomb) {
    if (item1 === item) tmp++;
  }
  console.log(item + ": " + tmp)
}