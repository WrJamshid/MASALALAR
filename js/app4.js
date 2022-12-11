alert(
  "hozir uchta son kritishingiz kerak, ular orasida manfiy va musbat sonlar mavjud bo'lsin"
);
let userNumbers = [];

userNumbers[0] = prompt("birinchi sonni kriting!");
userNumbers[1] = prompt("ikkinch sonni kriting!");
userNumbers[2] = prompt("uchinchi sonni kriting!");

let code = 0;

if (userNumbers[0] > 0) { 
  code++;
}

if (userNumbers[1] > 0) {
  code++;
}

if (userNumbers[2] > 0) {
  code++;
}
console.log(code, "ta musbat son");
