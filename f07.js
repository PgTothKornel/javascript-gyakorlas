let szamok = "";
let random = 0;
let ossz = 0;

const tomb = [0,0,0,0,0,0]

for (let i = 0; i < 20; i++) {
    random = Math.floor(Math.random() * 6 + 1)
    ossz += random;
    szamok += random + " ";
    //console.log(random)
    tomb[random - 1]++;
}

for (let i = 0; i < tomb.length; i++) {
    console.log((i + 1) + " dobások: " + tomb[i])
}

console.log("Összes dobás összege: " + ossz)