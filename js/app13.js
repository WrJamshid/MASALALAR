let son1 = +prompt("marhamat birinchi son kriting");
let son2 = +prompt("marhamat ikkinchi son kriting");
let son3 = +prompt("marhamat uchinchi son kriting");

if (son2 > son1 || son1 < son3){
    console.log(son1);
} else if (son3 > son1 || son1 < son2){
    console.log(son1);
}
else if (son1 > son2 || son2 < son3){
    console.log(son2);
} else if (son3 > son2 || son2 < son1){
    console.log(son2);
}
else if (son1 > son3 || son3 < son2){
    console.log(son3);
} else if (son2 > son3 || son3 < son1){
    console.log(son3);
}