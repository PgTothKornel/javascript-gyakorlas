const sor = "A kutya ugat, a macska nyávog. A kutya és a macska nem barátok, de a kutya néha alszik a macska mellett."

const fajtak = [];
const tomb = [];
let kis = "";


for (item of sor.split(" ")) {
  kis = item.toLowerCase().replaceAll(",","").replaceAll(".","").replaceAll(" ","");
  //console.log(kis)
  if (!fajtak.includes(kis)) {fajtak.push(kis)}
  tomb.push(kis)
}

let max1 = 0;
let max2 = 0;
let max3 = 0;
let szo1 = "";
let szo2 = "";
let szo3 = "";
let tmp = 0;

for (fajta of fajtak) {
  tmp = 0;
  for (item of tomb) {
    if (fajta === item) {
      tmp++;
    }
    
  }
  if (tmp > max1) {
        max3 = max2;
        szo3 = szo2;
        max2 = max1;
        szo2 = szo1;
        max1 = tmp;
        szo1 = fajta;
        continue;
      }
      else if (tmp > max2 && fajta !== szo2) {
        max3 = max2;
        szo3 = szo2
        max2 = tmp;
        szo2 = fajta;
        continue;
      }
      else if (tmp > max3 && fajta !== szo3) {
        max3 = tmp;
        szo3 = fajta;
        continue;
      }
}

console.log(szo1 + " " + max1);
console.log(szo2 + " " + max2);
console.log(szo3 + " " + max3);
//console.log(tomb)