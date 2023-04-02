// Problema: https://neps.academy/br/course/javascript-bootcamp/lesson/subtracao

const fs = require("fs");

let inp = fs.readFileSync(0, "utf8");
let linhas = inp.split("\n");
let a = parseInt(linhas[0]);
let b = parseInt(linhas[1]);

console.log(a - b);