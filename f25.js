const random = Math.floor(Math.random() * 100 + 1)

function valasz(tipp, gondolt) {
  if (tipp < gondolt) return "nagyobb";
  if (tipp > gondolt) return "kisebb";
  return "talált"
}

let szam = 50;
let lepes = 25;
let alkalom = 0;

while (valasz(szam, random) !== "talált") {
    alkalom++;
    let sor = valasz(szam, random);

    if (sor === "kisebb") {
      szam -= lepes
    }
    
    if (sor === "nagyobb") {
      szam += lepes
    }
    if (lepes > 1) lepes--;

    console.log(szam + " " + lepes)
}

console.log("Kitalálta a " + random + " számot " + alkalom + " lépésből!")