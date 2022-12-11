let user = prompt("MARHAMAT SON KRITING");
if (+user) {
  console.log("");
} else if (+user == 0) {
  console.log("nol butun son emas");
} else if (user) {
  console.log("SON O'RNIGA STRING KRITTINGIZ!");
}
if (0 < +user) {
  console.log(++user);
} else if (0 > +user) {
  console.log((user -= 2));
}
