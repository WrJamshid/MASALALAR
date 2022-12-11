"use strict";
let son1 = prompt("marhamat birinchi son kritilsin!");
let son2 = prompt("marhamat ikkinchi son kritilsin!");

if (son1 == son2){
    son1 = 0;
    son2 = 0;
    console.log(son1,son2);
}else if (son1 > son2) {
    son2 = son1;
    console.log(son1,son2);
}else if (son2 > son1) {
    son1 = son2;
    console.log(son1,son2);
}