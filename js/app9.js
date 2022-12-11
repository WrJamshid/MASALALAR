"use strict";
alert("masala 9 ikkinchi kritilgan haqiqiy son hech qachon birinchi haqiqiy sondan kichik bo'lmaydi")
let son1 = prompt("birinchi haqiqiy son kriting", "misol uchun 2.6");
let son2 = prompt("ikkinchi haqiqiy son kriting");
if (son1 > son2){
    son1 = son2++
}
else if (son1 == son2){
    son2++
} else if (son2 > son1)
{
    son2
}
 console.log(son1 ,son2);
