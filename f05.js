const random = Math.floor(Math.random() * 100 + 1)
const erdemjegy = (random < 50 ? "elégtelen (1)" : random < 65 ? "elégséges (2)" : random < 80 ? "közepes (3)" : random < 90 ? "jó (4)" : "jeles (5)")


console.log(`${random} pont -> ${erdemjegy}`);