let user = prompt("MARHAMAT SON KRITING");
if (0 < +user) {
  console.log(++user);
} else if (0 > +user) {
  console.log((user -= 2));
} else if (+user == 0) {
  console.log((user = 10));
}

if (+user) {
  console.log("");
} else if (user) {
  console.log("SON O'RNIGA STRING KRITTINGIZ!");
}
