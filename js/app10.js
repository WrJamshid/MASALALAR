"use strict";
let son1 = prompt("birinchi butun son kritilsin");
let son2 = prompt("ikkinchi butun son kritilsin");
let son3;
if (son1 == son2){
    son1 = 0;
    son2 = 0;
    console.log(son1,son2);
}else {
    son3 = son1;
    son1 = son2;
    son2 = son3;    
    console.log(son1 , son2);
}