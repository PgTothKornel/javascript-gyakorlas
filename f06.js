let szamok = "";

for (let i = 30; i > 0; i -= 3) {
    if (i == 30) szamok += i;
    else szamok += ", " + i
}

console.log(szamok)