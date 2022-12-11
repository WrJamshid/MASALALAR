if (+prompt("Yoshingiz nechida?") >= 20) {
  confirm("Menga turmushga chiqishga rozimisan")
    ? console.log("Toylar muborak")
    : console.log("Bashqa variant");
} else {
  if (confirm("Yaxshilab oylab kor lekin ukam.")) {
    confirm("Menga turmushga chiqishga rozimisan")
      ? console.log("Toylar muborak")
      : console.log("Bashqa variant");
  }
}