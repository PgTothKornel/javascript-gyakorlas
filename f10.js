let sor = "";

for (let i = 1; i < 11; i++) {
    sor = i + " számok: ";
    for (let j = 1; j < 11; j++) {
        sor += String(i * j).padStart(4) + " "
    }    
    console.log(sor);
}