const mondat = " a gyors barna róka átugrik a lusta kutya felett ";

let ossz = 0;
let leghosszabb = "";
let sor = "";

for (item of mondat.split(" ")) {
    if (item !== "") ossz++;
    if (item.length > leghosszabb.length) {
        leghosszabb = item;
    }
    sor += item.substring(0,1).toUpperCase() + item.substring(1) + " "
}


console.log("A mondat hossza: " + ossz)
console.log("A leghosszabb szó: " + leghosszabb)
console.log(sor)