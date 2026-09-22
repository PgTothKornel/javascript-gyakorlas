const tomb = []
let random = 0;
let min = 50;
let max = 1;
let ossz = 0;


for (let i = 0; i < 15; i++) {
    random = Math.floor(Math.random() * 50 + 1)
    tomb.push(random);
    min = (random < min ? random : min)
    max = (random > max ? random : max)
    ossz += random;
}

for (item of tomb) {
    console.log(item)
}

console.log("Minimum: " + min);
console.log("Maximum: " + max);
console.log("Átlag: " + (ossz / tomb.length).toFixed(1))