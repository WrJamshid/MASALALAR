let user = prompt("ILTIMOS SON KRITING", "KRITILGAN SON BITTAGA OSHIRILADI!");
if (+user) {
  console.log("");
} else if (user) {
  console.log("SON O'RNIGA STRING KRITTINGIZ!");
}
if (0 < +user) {
  console.log("JAVOBINGIZ:", ++user);
} else if (0 > +user) {
  console.log(+user);
}
