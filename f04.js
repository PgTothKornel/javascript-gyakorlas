const ar = 12990;
const random = Math.floor(Math.random() * 10)
const szorzo = random > 4 ? 0.9 : 1;


console.log("A vevő ennyit költött: " + ar * random * szorzo);
console.log(random > 4 ? `Eredeti ár: ${ar * random}` :  "")