alert(
  "hozir uchta son kritishingiz kerak, ular orasida manfiy va musbat sonlar mavjud bo'lsin"
);
let userNumbers = [];

userNumbers[0] = prompt("birinchi sonni kriting!");
userNumbers[1] = prompt("ikkinch sonni kriting!");
userNumbers[2] = prompt("uchinchi sonni kriting!");

let musbat = 0;
let manfiy = 0;

if (userNumbers[0] > 0) {
  musbat++;
} else if(userNumbers[0] < 0)
{
  manfiy--;
}
if (userNumbers[1] > 0) {
  musbat++;
} else(userNumbers[1] < 0)
{
  manfiy--;
}
if (userNumbers[2] > 0) {
  musbat++;
} else if(userNumbers[2] < 0)
{
  manfiy--;
}


console.log(musbat, "ta musbat son");
console.log(manfiy, "ta manfiy son");