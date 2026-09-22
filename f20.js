const termek = {
  nev: "Egér",
  nettoAr: 6990,
  bruttoAr: 0,
  keszlet: 12
}

function brutto(termek) {
  termek.bruttoAr = Math.round(termek.nettoAr * 1.27)
}

function leiras(termek) {
  console.log(termek.nev + " - " + termek.nettoAr + " Ft (brutto " + termek.bruttoAr + " Ft), készlet: " + (termek.keszlet > 0 ? termek.keszlet : "elfogyott") + " db");
}

brutto(termek);
leiras(termek);