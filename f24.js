const tomb = [];
const szelveny = [];

let random = 0;

while (tomb.length !== 5) {
  random = Math.floor(Math.random() * 90 + 1)
  if (!tomb.includes(random)) {
    tomb.push(random)
  }
}

while (szelveny.length !== 5) {
  random = Math.floor(Math.random() * 90 + 1)
  if (!szelveny.includes(random)) {
    szelveny.push(random)
  }
}

tomb.sort((a,b) => a - b);
szelveny.sort((a,b) => a - b);

for (let i = 0; i < tomb.length; i++) {
  console.log(tomb[i] + " - " + szelveny[i] + (szelveny[i] === tomb[i] ? " Talált!" : ""))
}