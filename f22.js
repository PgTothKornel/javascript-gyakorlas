const termek = [{
  nev: "Egér",
  nettoAr: 6990,
  keszlet: 1
},{
  nev: "HDMI-kábel",
  nettoAr: 1999,
  keszlet: 3
},{
  nev: "Billentyűzet",
  nettoAr: 14999,
  keszlet: 1
}];

let osszeg = 0;
let sor = "";

for (item of termek) {
  sor = "";
  osszeg += item.nettoAr
  sor += item.nev;
  sor += ("x" + item.keszlet).padStart(20 - String(item.nettoAr).length - item.nev.length)
  sor += " " + item.nettoAr;
  console.log(sor)
}