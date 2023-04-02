// Problema: https://neps.academy/br/course/javascript-bootcamp/lesson/area-do-retangulo
const fs = require("fs");
const input = fs.readFileSync(0, "utf8");

let linhas = input.split("\n");
let a = parseInt(linhas[0]);
let b = parseInt(linhas[1]);

console.log(a * b);